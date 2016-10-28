'use strict';

const AllObject = require('./AllObject');

class LivingObject extends AllObject {

    constructor(x, y, radius, viewRadius) {
        super(x, y, radius, viewRadius);
    }

    live() {
        //
    }

}

module.exports = LivingObject;