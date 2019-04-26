import { expect } from 'chai';
import 'mocha';
import { JSDOM } from 'jsdom';
import { Display, DISPLAY_ELEMENT, DISPLAY_CLASSES } from '../src/js/display';

const rowFactory = () => {
    const row = JSDOM.fragment('<div></div>').firstChild;

    row.classList.add(DISPLAY_CLASSES.ROW.MAIN);

    return row;
};
const cellFactory = (point) => {
    const x = point.x;
    const y = point.y;
    const element = JSDOM.fragment('<div></div>').firstChild;

    element.classList.add(DISPLAY_CLASSES.CELL.MAIN);
    element.setAttribute('data-x', x);
    element.setAttribute('data-y', y);

    return { x, y, element };
};

describe('Display', () => {
    let display;

    it('should generate field', () => {
        expect(() => {
            display = new Display({
                size: { x: 3, y: 2 },
            });

            display._rowFactory = rowFactory;
            display._cellFactory = cellFactory;
            display.generateField(JSDOM.fragment('<div></div>').firstChild);
        }).to.not.throw();
    });

    it('should render food', () => {
        const point = { x: 0, y: 1 };

        display.render({
            [DISPLAY_ELEMENT.FOOD]: [point],
        });

        expect(display.field[point.y][point.x].element.classList.contains(DISPLAY_CLASSES.CELL.FOOD)).to.be.true;
    });

    it('should render worm', () => {
        const point = { x: 0, y: 1 };

        display.render({
            [DISPLAY_ELEMENT.WORM]: [point],
        });

        expect(display.field[point.y][point.x].element.classList.contains(DISPLAY_CLASSES.CELL.WORM)).to.be.true;
    });

    it('should render worm head', () => {
        const point = { x: 0, y: 1 };

        display.render({
            [DISPLAY_ELEMENT.WORM_HEAD]: [point],
        });

        expect(display.field[point.y][point.x].element.classList.contains(DISPLAY_CLASSES.CELL.WORM_HEAD)).to.be.true;
    });
});
