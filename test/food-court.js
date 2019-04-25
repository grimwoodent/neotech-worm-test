import { expect } from 'chai';
import 'mocha';
import { FoodCourt } from '../src/js/food-court';

describe('Food court', () => {
    it('should set props', () => {
        const props = {
            size: 5,
            maxPosition: {
                x: 500,
                y: 500,
            },
        };
        const foodCourt = new FoodCourt(props);

        expect(foodCourt.props).to.be.deep.equals(props);
    });

    it('should be full after refill', () => {
        const foodCourt = new FoodCourt({
            size: 10,
        });

        foodCourt.refill();

        expect(foodCourt.getFood().length).to.be.deep.equals(10);
    });

    it('should remove food at point', () => {
        const foodCourt = new FoodCourt({
            size: 10,
        });

        foodCourt.refill();

        const food = foodCourt.getFood()[0];

        foodCourt.eatFoodAt({ x: food.x, y: food.y });

        expect(foodCourt.getFood().length).to.be.deep.equals(9);
    });
});