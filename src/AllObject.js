'use strict';

const MyPosition = require('./MyPosition');

class AllObject {

    constructor(x, y, radius, viewRadius) {
        this.position = new MyPosition(x, y, radius, viewRadius);
        this.radius = radius || 0;
        this.viewRadius = viewRadius || 0;
    }

    run() {
        console.log(this.position);
    }

    getPosition() {
        return this.position;
    }

    getRadius() {
        return this.radius;
    }

    getViewRadius() {
        return this.viewRadius;
    }

}

module.exports = AllObject;