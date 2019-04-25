import { expect } from 'chai';
import 'mocha';
import { Wall } from '../src/js/wall';

describe('Wall', () => {
    it('should return wall position info', () => {
        const wall = new Wall({
            size: {
                x: 5,
                y: 7,
            },
        });

        expect(wall.isWall({ x: 0, y: 0 })).to.be.false;
        expect(wall.isWall({ x: -1, y: 0 })).to.be.true;
        expect(wall.isWall({ x: 0, y: -1 })).to.be.true;

        expect(wall.isWall({ x: 5, y: 7 })).to.be.false;
        expect(wall.isWall({ x: 6, y: 7 })).to.be.true;
        expect(wall.isWall({ x: 5, y: 8 })).to.be.true;
    });
});
