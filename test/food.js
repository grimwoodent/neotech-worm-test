import { expect } from 'chai';
import 'mocha';
import { Food } from '../src/js/food';

describe('Food', () => {
    it('require position for create', () => {
        expect(() => {
            (new Food({ x: 1, y: 1 }));
        }).to.not.throw();

        expect(() => {
            (new Food({ x: 1 }));
        }).to.throw();

        expect(() => {
            (new Food({ y: 1 }));
        }).to.throw();

        expect(() => {
            (new Food());
        }).to.throw();
    });
});
