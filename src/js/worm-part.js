export const WORM_DIRECTION = {
    UP: 'up',
    DOWN: 'down',
    LEFT: 'left',
    RIGHT: 'right',
    NONE: 'none',
};

/**
 * Worm body info
 */
export class WormPart {
    constructor(props = { }) {
        if (typeof props.x !== 'number' || typeof props.y !== 'number' || !props.direction) {
            throw new Error('Worm part constructor properties corrupt');
        }

        this.x = props.x;
        this.y = props.y;
        this.direction = props.direction;
    }
}
