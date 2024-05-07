/* The location of an object at any moment defined by a 
spatio-temporal extent.
 */

define('Position', function () {
  function Position(lat, long, ts) {
    this.latitude = lat;
    this.longitude = long;
    this.timestamp = ts;
    this.prototype = this.constructor.name;

  }

  Position.prototype.getDistanceFrom = function (pos) {
    function degreesToRadians(degrees) {
      return degrees * Math.PI / 180;
    }

    distanceInKmBetweenEarthCoordinates = (lat2, lon2) => {
      let lat1 = this.latitude;
      let lon1 = this.longitude;
      const earthRadiusKm = 6371;

      const dLat = degreesToRadians(lat2 - lat1);
      const dLon = degreesToRadians(lon2 - lon1);

      lat1 = degreesToRadians(lat1);
      lat2 = degreesToRadians(lat2);

      const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      return earthRadiusKm * c;
    }

    return distanceInKmBetweenEarthCoordinates(pos.latitude, pos.longitude);
  }
  return Position;
});