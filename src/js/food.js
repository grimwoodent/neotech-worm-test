/**
 * Food info
 */
export class Food {
    constructor(props = { }) {
        if (typeof props.x !== 'number' || typeof props.y !== 'number') {
            throw new Error('Food constructor properties corrupt');
        }

        this.x = props.x;
        this.y = props.y;
    }
}
