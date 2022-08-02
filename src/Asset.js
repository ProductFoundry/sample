/* Vehicles whose positions are monitored
 */
define(function () {
  const Position = require('./Position');
  const Velocity = require('./Velocity');

  function Asset(id, lat, long, ts) {
    this.id = id;
    this.startPos = new Position(lat, long, ts);
    this.currentPosition = new Position(lat, long, ts);
    this.history = [];
    this.history.push(new Position(lat, long, ts));
    this.velocity = new Velocity(0, 0, ts);
  }

  Asset.prototype.setCurrentPosition = function (lat, long, ts) {
    this.currentPosition = new Position(lat, long, ts);
    this.history.push(new Position(lat, long, ts));
    this.velocity = this.velocity.calcVelocity(this.startPos, this.currentPosition);
  }

  return Asset;
});