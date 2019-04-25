const CLASSES = {
    GAME_OVER: {
        SHOWN: 'game_over_info__wrap___shown',
    },
};

/**
 * Display different info about game
 */
export class GameInfo {
    constructor() {
        this._gameOverHolder = null;
    }

    /**
     * Set element for display game over info
     * @param holder
     * @returns {GameInfo}
     */
    attachGameOverTo(holder) {
        this._gameOverHolder = holder;

        return this;
    }

    /**
     * Show game over
     * @returns {GameInfo}
     */
    showGameOver() {
        this._gameOverHolder.classList.add(CLASSES.GAME_OVER.SHOWN);

        return this;
    }
}
