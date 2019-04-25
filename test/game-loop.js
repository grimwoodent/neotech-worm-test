import { expect } from 'chai';
import 'mocha';
import { GameLoop, LOOP_EVENT } from '../src/js/game-loop';

describe('Game loop', () => {
    it('should set props', () => {
        const props = {
            size: 5000,
            step: 100,
            minSize: 300,
        };
        const gameLoop = new GameLoop(props);

        expect(gameLoop.props).to.be.deep.equals(props);
    });

    describe('Events', () => {
        it('require event params', () => {
            const gameLoop = new GameLoop({
                size: 1,
                minSize: 1,
            });

            expect(() => {
                gameLoop.on(LOOP_EVENT.LOOP);
            }).to.throw();

            expect(() => {
                gameLoop.on(null, () => { });
            }).to.throw();

            expect(() => {
                gameLoop.on(LOOP_EVENT.LOOP, 'not a function');
            }).to.throw();
        });

        it('should call start event', (done) => {
            const gameLoop = new GameLoop({ });

            expect(() => {
                gameLoop
                    .on(LOOP_EVENT.START, () => {
                        gameLoop.stop();
                        done();
                    })
                    .start();
            }).to.not.throw();
        });

        it('should call stop event', (done) => {
            const gameLoop = new GameLoop({ });

            expect(() => {
                gameLoop
                    .on(LOOP_EVENT.STOP, () => {
                        done();
                    })
                    .start()
                    .stop();
            }).to.not.throw();
        });

        it('should call loop event', (done) => {
            const gameLoop = new GameLoop({
                size: 1,
                minSize: 1,
            });

            expect(() => {
                gameLoop
                    .on(LOOP_EVENT.LOOP, () => {
                        gameLoop.stop();
                        done();
                    })
                    .start();
            }).to.not.throw();
        });
    });

    describe('Size', () => {
        it('should be decremented', () => {
            const gameLoop = new GameLoop({
                size: 1000,
                step: 300,
            });

            gameLoop.sizeDown();
            expect(gameLoop.props.size).to.be.equals(700);
        });

        it('shouldn`t be less then minimal', () => {
            const gameLoop = new GameLoop({
                size: 1000,
                step: 600,
                minSize: 500,
            });

            gameLoop.sizeDown();
            expect(gameLoop.props.size).to.be.equals(500);
        });
    });
});
