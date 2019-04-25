/**
 * Holds info about walls
 */
export class Wall {
    constructor(props = { }) {
        this.props = Object.assign({
            size: {
                x: 49,
                y: 49,
            },
        }, props);
    }

    /**
     * Check is point in wall
     * @param point
     */
    isWall(point) {
        return point.x < 0 || point.y < 0 || point.x > this.props.size.x || point.y > this.props.size.y;
    }
}
