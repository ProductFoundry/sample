define('main', ['DataFileReader', 'AssetCollection'], function (DataFileReader, AssetCollection) {
  const fileInput = $(".files")
  const reportTable = $("#assets tbody");
  const assets = new AssetCollection();
  $(fileInput).on('change', (e) => {
    const { files } = e.target;
    const f = new DataFileReader(files[0]);
    const check = function () {
      const events = f.getEvents();
      if (events) {
        events.forEach(event => {
          const asset = assets.getAsset(event.aId);
          if (asset) {
            asset.setCurrentPosition(event.lat, event.long, event.ts);
          } else {
            assets.addAsset(event.aId, event.aName, event.aType, event.lat, event.long, event.ts)
          }
        });
        if (window.readScope) {
          window.readScope({"assets": assets});
        }
        assets.getAllAssets().forEach(a => {
          const tr = $("<tr></tr>")
          $(tr).append("<td>" + a.name + "</td>")
            .append("<td>" + new Date(a.currentPosition.timestamp * 1000).toTimeString().split(" ")[0] + "</td>")
            .append("<td>" + a.currentPosition.latitude + "</td>")
            .append("<td>" + a.currentPosition.longitude + "</td>")
            .append("<td>" + a.velocity.speed + "</td>")
            .append("<td>" + a.velocity.direction + "</td>");
          $(reportTable).append(tr)
        })
        return;
      }
      setTimeout(check, 1001);
    }

    check();


  });
});
