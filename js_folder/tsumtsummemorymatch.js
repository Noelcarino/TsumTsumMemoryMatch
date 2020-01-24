class TsumTsumMemoryMatch{
    constructor(displayDom){
        this.dom = {
            container: displayDom
        }
    }
    loadPage(){
        this.loadHeader();
        this.loadBody();
        this.loadFooter();
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
    loadBody(){
        var bodyRenderStage = $("<div>")
                        .attr('id','bodyRenderStage');
        var bodyElement = $("<div>")
                        .attr('id','bodyElement')
                        .addClass('bodyElement')
                        .append(bodyRenderStage);

        bodyElement.appendTo(this.dom.container);
    }
    loadFooter(){
        var footerElement = $("<div>")
                        .attr('id','footerElement')
                        .addClass('footerElement');

        footerElement.appendTo(this.dom.container);
    }
}