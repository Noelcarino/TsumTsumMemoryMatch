class LeaderBoard {
    constructor(){
        this.loadLeaderBoard = this.createTable.bind(this);
        this.createTable = this.createTable.bind(this);
    }
    loadLeaderBoard(){
        this.createTable();
    }
    createTable(){
        

        var th1 = $("<th>")
                        .text("UserName");

        var trLeaderBoard = $("<tr>")
                        .append(th1);

        var theadLeaderBoard = $("<thead>")
                        .append(trLeaderBoard)

            theadLeaderBoard.appendTo(tableLeaderBoard);
            
        var tableLeaderBoard = $("<table>")
                        .attr('id','tableLeaderBoard')
                        .append(theadLeaderBoard);

        $("#bodyRenderStage").append(tableLeaderBoard);

    }
}