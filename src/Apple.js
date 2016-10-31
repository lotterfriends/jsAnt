'use strict';

const NoneLivingObject = require('./NoneLivingObject');

class Apple extends NoneLivingObject {


    constructor(x, y, radius) {
        super(x, y, radius);
        this.deathTime = 0;
        this.carrier = [];
    }

    getDeathTime() {
        return this.getDeathTime();
    }

    setDeathTime(deathTime) {
        this.deathTime = deathTime;
    }

    getPositionX() {
        if (this.carrier.length) {
            return this.carrier[0].x;
        }
        return this.x;
    }

    getPositionY() {
        if (this.carrier.length) {
            return this.carrier[0].y;
        }
        return this.y;
    }

    isAntCarryingThisApple(ant) {
        return this.carrier.findIndex(currentAnt => currentAnt.birthday === ant.birthday) > -1
    }

    addCarrier(ant) {
        if (!isAntCarryingThisApple(ant)) {
            this.carrier.push(ant);
        }
    }

    removeCarrier(ant) {
        if (this.deathTime > 0) {
            return;
        }
        if (isAntCarryingThisApple(ant)) {
            this.carrier.splice(this.carrier.findIndex(currentAnt => return currentAnt.birthday === ant.birthday), 1);
        } else {
            console.log('Konsistenzsfehler')
        }
    }

    getCarrierInRadius() {
        let carrierInRadius = [];
        this.carrier.forEach((currentAnt) => {
            if ((currentAnt.x <= this.x + 0.5 && currentAnt.x >= this.x - 0.5) &&
                (currentAnt.y <= this.y + 0.5 && currentAnt.y >= this.y - 0.5)) {
                carrierInRadius.push(currentAnt);
            }
        });
        return carrierInRadius;
    }

    getCarrierInRadiusCount() {
        return getCarrierInRadius().length;
    }


    isDelivered() {
        this.carrier.forEach((currentAnt) => {
            currentAnt.dropFood();
        });
        this.carrier = [];
    }
}

module.exports = NoneLivingObject;
