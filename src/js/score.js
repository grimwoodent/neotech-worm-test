export class Score {
    constructor(props = { }) {
        this.props = Object.assign({
            score: 0,
        }, props);
        this._holder = null;
    }

    /**
     * Attach element for render
     * @param holder
     * @returns {Score}
     */
    willRenderTo(holder) {
        this._holder = holder;

        return this;
    }

    /**
     * Return current score
     * @returns {number}
     */
    getScore() {
        return this.props.score;
    }

    /**
     * Increment score
     * @returns {Score}
     */
    inc() {
        this.props.score++;

        return this;
    }

    /**
     * Redraw score
     * @returns {Score}
     */
    render() {
        this._holder.innerHTML = '' + this.props.score;

        return this;
    }
}
