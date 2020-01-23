var loadDom;
var eventListeners;

document.addEventListener('DOMContentLoaded', function() {
    startApp();
  })
function startApp(){
    loadDom = new TsumTsumMemoryMatch("#js-target");
    eventListeners = new EventListeners();

    loadDom.loadPage();
    eventListeners.addEventListeners();
}