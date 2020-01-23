var loadDom;

document.addEventListener('DOMContentLoaded', function() {
    startApp();
  })
function startApp(){
    loadDom = new TsumTsumMemoryMatch("#js-target");
    loadDom.loadPage();
}