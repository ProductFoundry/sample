define('main', ['Manager'], function (Manager) {
  const fileInput = $(".files")
  const tbody = $("#assets tbody");
  console.log(fileInput, tbody);
  const manager = new Manager(fileInput, tbody);

});