export const DISPLAY_ELEMENT = {
    FOOD: 'food',
    WORM: 'worm',
};

const CLASSES = {
    ROW: {
        MAIN: 'main_field__row',
    },
    CELL: {
        MAIN: 'main_field__cell',
        FOOD: 'main_field__cell___food',
        WORM: 'main_field__cell___worm',
    },
};

export class Display {
    constructor(props = { }) {
        this.props = Object.assign({
            size: {
                x: 49,
                y: 49,
            },
        }, props);
    }

    /**
     * Prepare field to render
     * @param holder
     */
    generateField(holder) {
        holder.parentNode.style.width = `${this.props.size.x * 10}px`;
        holder.parentNode.style.height = `${this.props.size.y * 10}px`;

        this.field = (new Array(this.props.size.y))
            .fill(null)
            .map((r, y) => {
                const row = document.createElement('div');

                row.classList.add(CLASSES.ROW.MAIN);
                holder.appendChild(row);

                return (new Array(this.props.size.x))
                    .fill(null)
                    .map((c, x) => {
                        const element = document.createElement('div');

                        element.classList.add(CLASSES.CELL.MAIN);
                        element.setAttribute('data-x', x);
                        element.setAttribute('data-y', y);
                        row.appendChild(element);

                        return { x, y, element };
                    })
            });
    }

    /**
     * Redraw all elements
     */
    render(elements = { }) {
        if (!this.field) {
            throw new Error('Field is not generated');
        }

        this._forEachCell((cell) => {
            cell.element.classList.remove(CLASSES.CELL.FOOD);
            cell.element.classList.remove(CLASSES.CELL.WORM);
        });

        (elements[DISPLAY_ELEMENT.FOOD] || []).forEach((food) => {
            this.field[food.y][food.x].element.classList.add(CLASSES.CELL.FOOD);
        });
        (elements[DISPLAY_ELEMENT.WORM] || []).forEach((worm) => {
            this.field[worm.y][worm.x].element.classList.add(CLASSES.CELL.WORM);
        });
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
