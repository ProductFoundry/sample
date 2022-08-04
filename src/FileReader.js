/* Reads csv data
 */
define(function (require) {

  function FileReader(f) {
    const rawFile = new XMLHttpRequest();
    rawFile.open("GET", "./data.csv", false);
    rawFile.onreadystatechange = () => {
      if (rawFile.readyState === 4) {
        if (rawFile.status === 200 || rawFile.status == 0) {
          const allText = rawFile.responseText;
          this.events = allText.split("\r\n").filter(l => l.length).map(l => {
            const e = l.split(",");
            return {
              aId: e[0],
              aType: e[1],
              lat: e[4],
              long: e[5],
              aName: e[6],
              ts: e[8]
            }
          }).flat();
        }
      }
    }
    rawFile.send(null);
  }

  FileReader.prototype.getEvents = function () {
    return this.events;
  };
  
  return FileReader;
});