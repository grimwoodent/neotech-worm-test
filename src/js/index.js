import '../less/index.less'
import { GameLoop, LOOP_EVENT } from './game-loop';
import { FoodCourt } from './food-court';
import { Worm, WORM_DIRECTION } from './worm';
import { Display, DISPLAY_ELEMENT } from './display';
import { INPUT_CONTROL_EVENT, INPUT_CONTROL_KEY, InputControl } from './input-control';

document.addEventListener('DOMContentLoaded', () => {
    const size = {
        x: 20,
        y: 20,
    };
    const gameLoop = new GameLoop({
        size: 600,
        step: 50,
        minSize: 100,
    });
    const foodCourt = new FoodCourt({
        size: 5,
        maxPosition: {
            x: size.x - 1,
            y: size.y - 1,
        },
    });
    const worm = new Worm({
        position: {
            x: Math.round(size.x / 2),
            y: Math.round(size.y / 2),
        },
        direction: WORM_DIRECTION.UP,
    });
    const inputControl = new InputControl({ });
    const display = new Display({
        size: {
            x: size.x,
            y: size.y,
        },
    });

    inputControl
        .on(INPUT_CONTROL_EVENT.INPUT, (direction) => {
            switch (direction) {
                case INPUT_CONTROL_KEY.LEFT:
                    worm.setDirection(WORM_DIRECTION.LEFT);
                    break;

                case INPUT_CONTROL_KEY.UP:
                    worm.setDirection(WORM_DIRECTION.UP);
                    break;

                case INPUT_CONTROL_KEY.RIGHT:
                    worm.setDirection(WORM_DIRECTION.RIGHT);
                    break;

                case INPUT_CONTROL_KEY.DOWN:
                    worm.setDirection(WORM_DIRECTION.DOWN);
                    break;

                default:
                    break;
            }
        })
        .init();

    display
        .generateField(document.getElementById('filed_holder'));

    gameLoop
        .on(LOOP_EVENT.START, () => {
            foodCourt.refill();
        })
        .on(LOOP_EVENT.LOOP, () => {
            console.log('loop', gameLoop, foodCourt, display);

            worm.move();
            foodCourt.eatFoodAt(worm.getHead()).then(() => {
                worm.addNewOne();
                foodCourt.refill();
                gameLoop.sizeDown();
            }, () => { });

            // can be moved to render loop
            display.render({
                [DISPLAY_ELEMENT.FOOD]: foodCourt.getFood(),
                [DISPLAY_ELEMENT.WORM]: worm.getBody(),
            });
        })
        .start();
});
