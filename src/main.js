define(function (require) {
  // var Velocity = require('./Velocity');
  var AssetCollection = require('./AssetCollection');
  const assets = new AssetCollection();
  const FileReader = require('./FileReader');
  const f = new FileReader();
  const events = f.getEvents();
  events.forEach(event => {
    const asset = assets.getAsset(event.aId);
    if (asset) {
      asset.setCurrentPosition(event.lat, event.long, event.ts);
    } else {
      assets.addAsset(event.aId, event.aName, event.aType, event.lat, event.long, event.ts)
    }
  });
  const tbody = $("#assets tbody")
  assets.getAllAssets().forEach(a => {
    const tr = $("<tr></tr>")
    $(tr).append("<td>" + a.name + "</td>")
      .append("<td>" + new Date(a.currentPosition.timestamp * 1000).toTimeString().split(" ")[0] + "</td>")
      .append("<td>" + a.currentPosition.latitude + "</td>")
      .append("<td>" + a.currentPosition.longitude + "</td>")
      .append("<td>" + a.velocity.speed + "</td>")
      .append("<td>" + a.velocity.direction + "</td>");
    $(tbody).append(tr)
  })

  // const p1 = {latitude: 123, longitude: 125, timestamp: Math.floor((new Date()).getTime() / 1000)};
  // const p2 = {latitude: 123, longitude: 130, timestamp: Math.floor((new Date().getTime() + (1000 * 60 * 60 * 3) )/ 1000)};
  // const velocity = new Velocity().calcVelocity(p1, p2);
  // console.log("Velocity: " + velocity.speed);
  // console.log("Direction: ", velocity.direction);
});