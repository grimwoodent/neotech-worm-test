import { Food } from './food';
import { randomInt } from './utils/random-int';

/**
 * Class for control food positions
 */
export class FoodCourt {
    constructor(props = { }) {
        this.props = Object.assign({
            size: 3, // how many food can be on food court at same time
            maxPosition: {
                x: 49,
                y: 49,
            },
        }, props);
        this._food = [];
    }

    /**
     * Creates new food
     * @returns {FoodCourt}
     */
    refill(excluded = []) {
        while (this._food.length < this.props.size) {
            const x = randomInt(0, this.props.maxPosition.x);
            const y = randomInt(0, this.props.maxPosition.y);

            if (!(this._food.concat(excluded)).find((point) => point.x === x && point.y === y)) {
                this._food.push(new Food({ x, y }));
            }
        }

        return this;
    }

    /**
     * Get food list
     * @returns {Array}
     */
    getFood() {
        return this._food;
    }

    /**
     * Eat food at point
     * @param point
     * @returns {Promise}
     */
    eatFoodAt(point) {
        return new Promise((resolve, reject) => {
            const idx = this._food.findIndex((food) => food.x === point.x && food.y === point.y);

            if (!~idx) {
                reject();
                return;
            }

            this._food.splice(idx, 1);
            resolve();
        });
    }
}