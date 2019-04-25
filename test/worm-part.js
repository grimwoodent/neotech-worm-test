import { expect } from 'chai';
import 'mocha';
import { WORM_DIRECTION, WormPart } from '../src/js/worm-part';

describe('Worm part', () => {
    it('require position and direction for create', () => {
        expect(() => {
            (new WormPart({ x: 1, y: 1, direction: WORM_DIRECTION.UP }));
        }).to.not.throw();

        expect(() => {
            (new WormPart({ x: 1, direction: WORM_DIRECTION.UP }));
        }).to.throw();

        expect(() => {
            (new WormPart({ y: 1, direction: WORM_DIRECTION.UP }));
        }).to.throw();

        expect(() => {
            (new WormPart({ x: 1, y: 1 }));
        }).to.throw();

        expect(() => {
            (new WormPart());
        }).to.throw();
    });
});