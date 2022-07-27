define(function (require) {
    var Velocity = require('./Velocity');

    const p1 = {latitude: 123, longitude: 125, timestamp: Math.floor((new Date()).getTime() / 1000)};
    const p2 = {latitude: 123, longitude: 130, timestamp: Math.floor((new Date().getTime() + (1000 * 60 * 60 * 3) )/ 1000)};
    console.log("Velocity: " + new Velocity().calcVelocity(p1, p2));
});