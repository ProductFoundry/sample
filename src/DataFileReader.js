/* Reads csv data
 */
define('DataFileReader', function () {

  function DataFileReader(f) {
    if (f.type) {
      let reader = new FileReader();      
      reader.onload = () => {
        this.textToEvents(reader.result);  
      };
      reader.readAsText(f);

      reader.onerror = () => {
        console.log(reader.error);
      };
    } else {
      const rawFile = new XMLHttpRequest();
      rawFile.open("GET", f, false);
      rawFile.onreadystatechange = () => {
        if (rawFile.readyState === 4) {
          if (rawFile.status === 200 || rawFile.status == 0) {
            this.textToEvents(rawFile.responseText);            
          }
        }
      }
      rawFile.send(null);
    }
  }

  DataFileReader.prototype.textToEvents = function(text) {
    this.events = text.split("\r\n").filter(l => l.length).map(l => {
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

  DataFileReader.prototype.getEvents = function () {
    return this.events;
  };

  return DataFileReader;
});