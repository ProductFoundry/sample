/* Vehicles whose positions are monitored
 */
define('Asset', ['Position', 'Velocity'], function (Position, Velocity) {

  function Asset(id,  assetName, assetType, lat, long, ts) {
    this.id = id;
    this.name = assetName;
    this.type = assetType;
    this.startPos = new Position(lat, long, ts);
    this.currentPosition = new Position(lat, long, ts);
    this.history = [];
    this.history.push(new Position(lat, long, ts));
    this.velocity = new Velocity(0, 0, ts);
  }

  Asset.prototype.setCurrentPosition = function (lat, long, ts) {
    this.currentPosition = new Position(lat, long, ts);
    this.velocity = this.velocity.calcVelocity(this.startPos, this.currentPosition);
    this.history.push({position: new Position(lat, long, ts), velocity: Object.assign({}, this.velocity)});
  }

  return Asset;
});