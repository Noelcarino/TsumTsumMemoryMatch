class TsumTsumMemoryMatch{
    constructor(displayDom){
        this.dom = {
            container: displayDom
        }
    }
    loadPage(){
        this.loadHeader();
    }
    loadHeader(){
        var liLeaderBoard = $("<li>")
                        .attr("id","liLeaderBoard")
                        .addClass("liNav")
                        .text("LeaderBoard");

        var liHome = $("<li>")
                        .attr("id","liHome")
                        .addClass("liNav")
                        .text("Home");

        var ulHeader = $("<ul>")
                        .attr("id","ulHeader")
                        .append(liHome,liLeaderBoard);

        ulHeader.appendTo(this.dom.container);
    }
}