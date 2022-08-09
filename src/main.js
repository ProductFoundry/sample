define('main', ['Manager'], function (Manager) {
  const fileInput = $(".files")
  const tbody = $("#assets tbody");
  const manager = new Manager(fileInput, tbody);

});