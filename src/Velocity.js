/* The directional speed of a object in motion
 */
define(function (require) {
  const Position = require('./Position');

  function Velocity(speed, dir, ts) {
    this.speed = speed;
    this.direction = dir;
    this.timestamp = ts;
  }

  Velocity.prototype.calcVelocity = function (p1, p2) {
    const pos1 = new Position(p1.latitude, p1.longitude, p1.timestamp);
    const pos2 = new Position(p2.latitude, p2.longitude, p2.timestamp);
    const distance = pos2.getDistanceFrom(pos1);
    const timeTaken = pos2.timestamp - pos1.timestamp;
    return distance / timeTaken;
  }
  return Velocity;
});