'use strict';

const AllObject = require('./AllObject');

class NoneLivingObject extends AllObject {

    constructor(x, y, radius) {
        super(x, y, radius);
    }

}

module.exports = NoneLivingObject;