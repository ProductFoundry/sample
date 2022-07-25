define(function (require) {
    var Velocity = require('./Velocity');

    const p1 = {latitude: 123, longitude: 125, timestamp: 100};
    const p2 = {latitude: 123, longitude: 130, timestamp: 110};
    console.log("Velocity: " + new Velocity().calcVelocity(p1, p2));
});