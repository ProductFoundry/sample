/* Reads csv data
 */
define(function (require) {

  function FileReader(f) {
    const rawFile = new XMLHttpRequest();
    rawFile.open("GET", "./data.csv", false);
    rawFile.onreadystatechange = function () {
      if (rawFile.readyState === 4) {
        if (rawFile.status === 200 || rawFile.status == 0) {
          const allText = rawFile.responseText;
        }
      }
    }
    rawFile.send(null);
  }

  // FileReader.prototype.readFile = function (f) {
  //   return this;
  // }
  return FileReader;
});