export const LOOP_EVENT = {
    START: 'start',
    STOP: 'stop',
    LOOP: 'loop',
};

/**
 * Main game loop class.
 * Control events for objects
 */
export class GameLoop {
    constructor(props = { }) {
        this.props = Object.assign({
            size: 1000, // how often call loop event
            step: 100, // inc or dec size step
            minSize: 300, // minimal size
        }, props);
        this.events = {
            [LOOP_EVENT.START]: [],
            [LOOP_EVENT.STOP]: [],
            [LOOP_EVENT.LOOP]: [],
        };
        this._active = false;
        this._loop = null;

        if (this.props.size < this.props.minSize) {
            this.props.size = this.props.minSize;
        }
    }

    /**
     * Add new event for game loop
     * @param name
     * @param handler
     * @returns {GameLoop}
     */
    on(name, handler) {
        if (!name) {
            throw new Error('Empty event name');
        }

        if (typeof handler !== 'function') {
            throw new Error('Event handler is not a function');
        }

        this.events[name].push(handler);

        return this;
    }

    /**
     * Start game loop
     * @returns {GameLoop}
     */
    start() {
        this._active = true;
        this._callEvent(LOOP_EVENT.START);
        this._nextLoop();

        return this;
    }

    /**
     * Stop game loop
     * @returns {GameLoop}
     */
    stop() {
        this._active = false;
        this._clearLoop();
        this._callEvent(LOOP_EVENT.STOP);

        return this;
    }

    /**
     * Increment game loop speed
     * @returns {GameLoop}
     */
    sizeDown() {
        if (this.props.size - this.props.step < this.props.minSize) {
            this.props.size = this.props.minSize;

            return this;
        }

        this.props.size -= this.props.step;

        return this;
    }

    /**
     * Call next loop iteration
     * @private
     * @returns {GameLoop}
     */
    _nextLoop() {
        if (!this._active) {
            return this;
        }

        this._clearLoop();
        this._loop = window.setTimeout(() => {
            this._loop = null;
            this._callEvent(LOOP_EVENT.LOOP);
            this._nextLoop();
        }, this.props.size);

        return this;
    }

    /**
     * Clear current loop
     * @returns {GameLoop}
     * @private
     */
    _clearLoop() {
        if (this._loop) {
            window.clearTimeout(this._loop);
        }

        return this;
    }

    /**
     * Call event by name
     * @param name
     * @returns {GameLoop}
     * @private
     */
    _callEvent(name) {
        if (!name) {
            return this;
        }

        this.events[name].forEach((handler) => {
            handler();
        });

        return this;
    }
}
