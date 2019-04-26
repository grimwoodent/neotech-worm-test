import { expect } from 'chai';
import 'mocha';
import { JSDOM } from 'jsdom';
import { GameInfo, GAME_INFO_CLASSES } from '../src/js/game-info';

describe('Game info', () => {
    it('should show Game Over', () => {
        const gameInfo = new GameInfo({ });

        gameInfo.attachGameOverTo(JSDOM.fragment('<div></div>').firstChild);
        gameInfo.showGameOver();

        expect(gameInfo._gameOverHolder.classList.contains(GAME_INFO_CLASSES.GAME_OVER.SHOWN)).to.be.true;
    });
});
