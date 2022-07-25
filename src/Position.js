/* The location of an object at any moment defined by a 
spatio-temporal extent.
 */

define(function () {
  function Position(lat, long, ts) {
      this.latitude = lat;
      this.longitude = long;
      this.timestamp = ts;
  }
  Position.prototype.getDistanceFrom = function (pos) {
    return 100;
  }
  return Position;
});