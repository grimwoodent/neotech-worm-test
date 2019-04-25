import '../less/index.less'
import { GameLoop, LOOP_EVENT } from './game-loop';
import { FoodCourt } from './food-court';
import { Worm, WORM_DIRECTION } from './worm';
import { Display, DISPLAY_ELEMENT } from './display';
import { INPUT_CONTROL_EVENT, INPUT_CONTROL_KEY, InputControl } from './input-control';
import { Wall } from './wall';
import { Score } from './score';

class Game {
    /**
     * Reinit params
     * @returns {Game}
     */
    init() {
        this.size = {
            x: 50,
            y: 50,
        };
        this.gameLoop = new GameLoop({
            size: 500,
            step: 30,
            minSize: 100,
        });
        this.foodCourt = new FoodCourt({
            size: 5,
            maxPosition: {
                x: this.size.x - 1,
                y: this.size.y - 1,
            },
        });
        this.worm = new Worm({
            position: {
                x: Math.round(this.size.x / 2),
                y: Math.round(this.size.y / 2),
            },
            direction: WORM_DIRECTION.UP,
        });
        this.wall = new Wall({
            size: {
                x: this.size.x - 1,
                y: this.size.y - 1,
            },
        });
        this.inputControl = new InputControl({ });
        this.score = new Score({ });
        this.display = new Display({
            size: {
                x: this.size.x,
                y: this.size.y,
            },
        });

        this.inputControl
            .on(INPUT_CONTROL_EVENT.INPUT, (direction) => {
                switch (direction) {
                    case INPUT_CONTROL_KEY.LEFT:
                        this.worm.setDirection(WORM_DIRECTION.LEFT);
                        break;

                    case INPUT_CONTROL_KEY.UP:
                        this.worm.setDirection(WORM_DIRECTION.UP);
                        break;

                    case INPUT_CONTROL_KEY.RIGHT:
                        this.worm.setDirection(WORM_DIRECTION.RIGHT);
                        break;

                    case INPUT_CONTROL_KEY.DOWN:
                        this.worm.setDirection(WORM_DIRECTION.DOWN);
                        break;

                    default:
                        break;
                }
            })
            .init();

        this.display.generateField(document.getElementById('filed_holder'));

        this.score.willRenderTo(document.getElementById('score_holder'));

        this.gameLoop
            .on(LOOP_EVENT.START, () => {
                this.foodCourt.refill(this.worm.getBody());
                this.score.render();
            })
            .on(LOOP_EVENT.LOOP, () => {
                this.worm.move();

                if (this.worm.isBodyPart(this.worm.getHead(), true)) {
                    this.gameLoop.stop();
                    console.warn('Game over'); // @TODO info
                    return;
                }

                if (this.wall.isWall(this.worm.getHead())) {
                    this.gameLoop.stop();
                    console.warn('Game over'); // @TODO info
                    return;
                }

                this.foodCourt .eatFoodAt(this.worm.getHead()).then(() => {
                    this.worm.addNewOne();
                    this.score.inc();
                    this.foodCourt .refill();
                    this.gameLoop.sizeDown();

                    // can be moved to render loop
                    this.score.render();
                }, () => { });

                // can be moved to render loop
                this.display.render({
                    [DISPLAY_ELEMENT.FOOD]: this.foodCourt .getFood(),
                    [DISPLAY_ELEMENT.WORM]: this.worm.getBody(),
                    [DISPLAY_ELEMENT.WORM_HEAD]: [this.worm.getHead()],
                });
            });

        return this;
    }

    /**
     * Start game
     * @returns {Game}
     */
    start() {
        this.gameLoop.start();

        return this;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    (new Game()).init().start();
});
