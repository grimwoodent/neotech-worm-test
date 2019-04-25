import { expect } from 'chai';
import 'mocha';
import { Score } from '../src/js/score';

describe('Score', () => {
    it('should increment score', () => {
        const score = new Score({ });

        expect(score.getScore()).to.be.deep.equals(0);

        score.inc();

        expect(score.getScore()).to.be.deep.equals(1);
    });
});
