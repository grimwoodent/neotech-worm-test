import { expect } from 'chai';
import 'mocha';
import { JSDOM } from 'jsdom';
import { Score } from '../src/js/score';

describe('Score', () => {
    it('should increment score', () => {
        const score = new Score({ });

        expect(score.getScore()).to.be.deep.equals(0);

        score.inc();

        expect(score.getScore()).to.be.deep.equals(1);
    });

    it('should render score', () => {
        const score = new Score({
            score: 10,
        });

        score.willRenderTo(JSDOM.fragment('<div></div>').firstChild);
        score.render();

        expect(score._holder.innerHTML).to.be.equal('10');
    });
});
