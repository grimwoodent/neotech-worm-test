export const INPUT_CONTROL_EVENT = {
    INPUT: 'input'
};

export const INPUT_CONTROL_KEY = {
    UP: 'up',
    DOWN: 'down',
    LEFT: 'left',
    RIGHT: 'right',
};

const KEYCODE = {
    ARROW_LEFT: 37,
    ARROW_UP: 38,
    ARROW_RIGHT: 39,
    ARROW_DOWN: 40,
    A: 65,
    W: 87,
    D: 68,
    S: 83,
};

export class InputControl {
    constructor(props = { }) {
        this.events = {
            [INPUT_CONTROL_EVENT.INPUT]: [],
        };
    }

    /**
     * Init all listeners
     */
    init() {
        document.body.addEventListener('keydown', (e) => {
            switch (e.keyCode) {
                case KEYCODE.ARROW_LEFT: // and
                case KEYCODE.A:
                    this._callEvent(INPUT_CONTROL_EVENT.INPUT, INPUT_CONTROL_KEY.LEFT);
                    break;

                case KEYCODE.ARROW_UP: // and
                case KEYCODE.W:
                    this._callEvent(INPUT_CONTROL_EVENT.INPUT, INPUT_CONTROL_KEY.UP);
                    break;

                case KEYCODE.ARROW_RIGHT: // and
                case KEYCODE.D:
                    this._callEvent(INPUT_CONTROL_EVENT.INPUT, INPUT_CONTROL_KEY.RIGHT);
                    break;

                case KEYCODE.ARROW_DOWN: // and
                case KEYCODE.S:
                    this._callEvent(INPUT_CONTROL_EVENT.INPUT, INPUT_CONTROL_KEY.DOWN);
                    break;

                default:
                    break;
            }
        });
    }

    /**
     * Add new event for user controls
     * @param name
     * @param handler
     * @returns {InputControl}
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
     * Call event by name
     * @param name
     * @param args
     * @returns {InputControl}
     * @private
     */
    _callEvent(name, ...args) {
        if (!name) {
            return this;
        }

        this.events[name].forEach((handler) => {
            handler(...args);
        });

        return this;
    }
}
