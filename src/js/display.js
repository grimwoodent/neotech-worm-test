export const DISPLAY_ELEMENT = {
    FOOD: 'food',
    WORM: 'worm',
    WORM_HEAD: 'worm-head',
};

export const DISPLAY_CLASSES = {
    ROW: {
        MAIN: 'main_field__row',
    },
    CELL: {
        MAIN: 'main_field__cell',
        FOOD: 'main_field__cell___food',
        WORM: 'main_field__cell___worm',
        WORM_HEAD: 'main_field__cell___worm_head',
    },
};

export class Display {
    constructor(props = { }) {
        this.props = Object.assign({
            size: {
                x: 50,
                y: 50,
            },
        }, props);

        this._rowFactory = () => {
            const row = document.createElement('div');

            row.classList.add(DISPLAY_CLASSES.ROW.MAIN);

            return row;
        };
        this._cellFactory = (point) => {
            const x = point.x;
            const y = point.y;
            const element = document.createElement('div');

            element.classList.add(DISPLAY_CLASSES.CELL.MAIN);
            element.setAttribute('data-x', x);
            element.setAttribute('data-y', y);

            return { x, y, element };
        };
    }

    /**
     * Prepare field to render
     * @param holder
     */
    generateField(holder) {
        if (holder.parentNode && holder.parentNode.style) {
            holder.parentNode.style.width = `${this.props.size.x * 10}px`;
            holder.parentNode.style.height = `${this.props.size.y * 10}px`;
        }

        this.field = (new Array(this.props.size.y))
            .fill(null)
            .map((r, y) => {
                const row = this._rowFactory();

                holder.appendChild(row);

                return (new Array(this.props.size.x))
                    .fill(null)
                    .map((c, x) => {
                        const element = this._cellFactory({ x ,y });

                        row.appendChild(element.element);

                        return element;
                    })
            });
    }

    /**
     * Redraw all elements
     *
     * @returns {Display}
     */
    render(elements = { }) {
        if (!this.field) {
            throw new Error('Field is not generated');
        }

        this._forEachCell((cell) => {
            cell.element.classList.remove(DISPLAY_CLASSES.CELL.FOOD);
            cell.element.classList.remove(DISPLAY_CLASSES.CELL.WORM);
            cell.element.classList.remove(DISPLAY_CLASSES.CELL.WORM_HEAD);
        });

        (elements[DISPLAY_ELEMENT.FOOD] || []).forEach((food) => {
            this.field[food.y][food.x].element.classList.add(DISPLAY_CLASSES.CELL.FOOD);
        });
        (elements[DISPLAY_ELEMENT.WORM] || []).forEach((worm) => {
            this.field[worm.y][worm.x].element.classList.add(DISPLAY_CLASSES.CELL.WORM);
        });
        (elements[DISPLAY_ELEMENT.WORM_HEAD] || []).forEach((worm) => {
            this.field[worm.y][worm.x].element.classList.add(DISPLAY_CLASSES.CELL.WORM_HEAD);
        });

        return this;
    }

    /**
     * Call function for each cell
     * @param handler
     * @private
     */
    _forEachCell(handler) {
        this.field.forEach((row) => {
            row.forEach((cell) => {
                handler(cell);
            })
        });
    }
}
