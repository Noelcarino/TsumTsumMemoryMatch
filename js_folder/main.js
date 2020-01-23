var loadDom;

$(document).ready( startApp );

function startApp(){
    loadDom = new TsumTsumMemoryMatch("#js-target");
    loadDom.loadPage();
}