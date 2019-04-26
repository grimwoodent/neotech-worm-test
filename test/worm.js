import { expect } from 'chai';
import 'mocha';
import { Worm, WORM_DIRECTION } from '../src/js/worm';

describe('Worm', () => {
    describe('Create', () => {
        it('should return head', () => {
            const worm = new Worm({ position: { x: 10, y: 15 } });
            const head = worm.getHead();

            expect(head).to.not.be.empty;
            expect(head.x).to.be.equals(10);
            expect(head.y).to.be.equals(15);
        });

        it('should add new one', () => {
            const worm = new Worm({ position: { x: 10, y: 15 } });

            worm.addNewOne();

            expect(worm.getBody()[1]).to.be.deep.equals({ x: 10, y: 15, direction: WORM_DIRECTION.NONE });
        });
    });

    describe('Direction', () => {
        describe('Up', () => {
            it('should turn to left', () => {
                const worm = new Worm({
                    position: {
                        x: 10,
                        y: 10,
                    },
                    direction: WORM_DIRECTION.UP,
                });

                worm.setDirection(WORM_DIRECTION.LEFT);
                expect(worm.getBody()[0].direction).to.be.equals(WORM_DIRECTION.LEFT);
            });

            it('should turn to right', () => {
                const worm = new Worm({
                    position: {
                        x: 10,
                        y: 10,
                    },
                    direction: WORM_DIRECTION.UP,
                });

                worm.setDirection(WORM_DIRECTION.RIGHT);
                expect(worm.getBody()[0].direction).to.be.equals(WORM_DIRECTION.RIGHT);
            });

            it('shouldn`t turn to down', () => {
                const worm = new Worm({
                    position: {
                        x: 10,
                        y: 10,
                    },
                    direction: WORM_DIRECTION.UP,
                });

                worm.setDirection(WORM_DIRECTION.DOWN);
                expect(worm.getBody()[0].direction).to.be.equals(WORM_DIRECTION.UP);
            });
        });

        describe('Down', () => {
            it('should turn to left', () => {
                const worm = new Worm({
                    position: {
                        x: 10,
                        y: 10,
                    },
                    direction: WORM_DIRECTION.DOWN,
                });

                worm.setDirection(WORM_DIRECTION.LEFT);
                expect(worm.getBody()[0].direction).to.be.equals(WORM_DIRECTION.LEFT);
            });

            it('should turn to right', () => {
                const worm = new Worm({
                    position: {
                        x: 10,
                        y: 10,
                    },
                    direction: WORM_DIRECTION.DOWN,
                });

                worm.setDirection(WORM_DIRECTION.RIGHT);
                expect(worm.getBody()[0].direction).to.be.equals(WORM_DIRECTION.RIGHT);
            });

            it('shouldn`t turn to up', () => {
                const worm = new Worm({
                    position: {
                        x: 10,
                        y: 10,
                    },
                    direction: WORM_DIRECTION.DOWN,
                });

                worm.setDirection(WORM_DIRECTION.UP);
                expect(worm.getBody()[0].direction).to.be.equals(WORM_DIRECTION.DOWN);
            });
        });

        describe('Left', () => {
            it('should turn to up', () => {
                const worm = new Worm({
                    position: {
                        x: 10,
                        y: 10,
                    },
                    direction: WORM_DIRECTION.LEFT,
                });

                worm.setDirection(WORM_DIRECTION.UP);
                expect(worm.getBody()[0].direction).to.be.equals(WORM_DIRECTION.UP);
            });

            it('should turn to down', () => {
                const worm = new Worm({
                    position: {
                        x: 10,
                        y: 10,
                    },
                    direction: WORM_DIRECTION.LEFT,
                });

                worm.setDirection(WORM_DIRECTION.DOWN);
                expect(worm.getBody()[0].direction).to.be.equals(WORM_DIRECTION.DOWN);
            });

            it('shouldn`t turn to right', () => {
                const worm = new Worm({
                    position: {
                        x: 10,
                        y: 10,
                    },
                    direction: WORM_DIRECTION.LEFT,
                });

                worm.setDirection(WORM_DIRECTION.RIGHT);
                expect(worm.getBody()[0].direction).to.be.equals(WORM_DIRECTION.LEFT);
            });
        });

        describe('Right', () => {
            it('should turn to up', () => {
                const worm = new Worm({
                    position: {
                        x: 10,
                        y: 10,
                    },
                    direction: WORM_DIRECTION.RIGHT,
                });

                worm.setDirection(WORM_DIRECTION.UP);
                expect(worm.getBody()[0].direction).to.be.equals(WORM_DIRECTION.UP);
            });

            it('should turn to down', () => {
                const worm = new Worm({
                    position: {
                        x: 10,
                        y: 10,
                    },
                    direction: WORM_DIRECTION.RIGHT,
                });

                worm.setDirection(WORM_DIRECTION.DOWN);
                expect(worm.getBody()[0].direction).to.be.equals(WORM_DIRECTION.DOWN);
            });

            it('shouldn`t turn to left', () => {
                const worm = new Worm({
                    position: {
                        x: 10,
                        y: 10,
                    },
                    direction: WORM_DIRECTION.RIGHT,
                });

                worm.setDirection(WORM_DIRECTION.LEFT);
                expect(worm.getBody()[0].direction).to.be.equals(WORM_DIRECTION.RIGHT);
            });
        });
    });

    describe('Moving', () => {
        it('should move up', () => {
            const worm = new Worm({ position: { x: 10, y: 10 }, direction: WORM_DIRECTION.UP });

            worm.move();

            expect(worm.getBody()[0].y).to.be.equals(9);
        });

        it('should move left', () => {
            const worm = new Worm({ position: { x: 10, y: 10 }, direction: WORM_DIRECTION.LEFT });

            worm.move();

            expect(worm.getBody()[0].x).to.be.equals(9);
        });

        it('should move down', () => {
            const worm = new Worm({ position: { x: 10, y: 10 }, direction: WORM_DIRECTION.DOWN });

            worm.move();

            expect(worm.getBody()[0].y).to.be.equals(11);
        });

        it('should move right', () => {
            const worm = new Worm({ position: { x: 10, y: 10 }, direction: WORM_DIRECTION.RIGHT });

            worm.move();

            expect(worm.getBody()[0].x).to.be.equals(11);
        });
    });
});
