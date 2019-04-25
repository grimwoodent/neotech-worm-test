import { WORM_DIRECTION, WormPart } from './worm-part';

const ALLOWED_TURNS = {
    [WORM_DIRECTION.UP]: [WORM_DIRECTION.LEFT, WORM_DIRECTION.RIGHT],
    [WORM_DIRECTION.DOWN]: [WORM_DIRECTION.LEFT, WORM_DIRECTION.RIGHT],
    [WORM_DIRECTION.LEFT]: [WORM_DIRECTION.UP, WORM_DIRECTION.DOWN],
    [WORM_DIRECTION.RIGHT]: [WORM_DIRECTION.UP, WORM_DIRECTION.DOWN],
};

export { WORM_DIRECTION };

/**
 * Worm entity
 */
export class Worm {
    constructor(props = { }) {
        const bodyProps = Object.assign({
            position: {
                x: 24,
                y: 24,
            },
            direction: WORM_DIRECTION.UP,
        }, props);
        this._body = [new WormPart({
            x: bodyProps.position.x,
            y: bodyProps.position.y,
            direction: bodyProps.direction,
        })];
        this._direction = bodyProps.direction; // used for change navigation only after move
    }

    /**
     * Get all worm parts
     * @returns {Array}
     */
    getBody() {
        return this._body;
    }

    /**
     * Move all parts
     * @returns {Worm}
     */
    move() {
        for (let i = this._body.length - 1; i >= 0; i--) {
            const bodyPart = this._body[i];
            const prevPart = this._body[i - 1];

            // move head to worm direction
            switch (bodyPart.direction) {
                case WORM_DIRECTION.UP:
                    bodyPart.y -= 1;
                    break;
                case WORM_DIRECTION.DOWN:
                    bodyPart.y += 1;
                    break;
                case WORM_DIRECTION.LEFT:
                    bodyPart.x -= 1;
                    break;
                case WORM_DIRECTION.RIGHT:
                    bodyPart.x += 1;
                    break;
                case WORM_DIRECTION.NONE:
                    // nothing for new one part
                    break;
                default:
                    throw new Error('Body part direction not found');
                    break;
            }

            if (prevPart) {
                bodyPart.direction = prevPart.direction;
            }
        }

        this._direction = this._body[0].direction;

        return this;
    }

    /**
     * Turn worm to direction
     * @param direction
     * @returns {Worm}
     */
    setDirection(direction) {
        if (!this._body[0]) {
            throw new Error('Empty head part');
        }

        const allowedTurns = ALLOWED_TURNS[this._direction];

        if (allowedTurns.find((d) => d === direction)) {
            this._body[0].direction = direction;
        }

        return this;
    }

    /**
     * Return head body part
     * @returns {WormPart}
     */
    getHead() {
        return this._body[0];
    }

    /**
     * Check is point is part of body
     * @param point
     * @param excludeHead
     * @returns {boolean}
     */
    isBodyPart(point, excludeHead) {
        const count = this._body.reduce((count, part) => part.x === point.x && part.y === point.y ? count + 1 : count, 0);

        return excludeHead ? count > 1 : count > 0;
    }

    /**
     * Add new part to body
     * @returns {Worm}
     */
    addNewOne() {
        const lastPart = this._body[this._body.length - 1];

        if (!lastPart) {
            throw new Error('Empty tail part');
        }

        this._body.push(new WormPart({
            x: lastPart.x,
            y: lastPart.y,
            direction: WORM_DIRECTION.NONE,
        }));

        return this;
    }
}
