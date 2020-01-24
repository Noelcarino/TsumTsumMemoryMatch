class LeaderBoard {
    constructor(){
        this.objectArray = [
            {
                userName: "LeonOnirac",
                tsumMatched: "324",
                dateCleared: "1/23/2020"
            },
            {
                userName: "PigletEmperror",
                tsumMatched: "759",
                dateCleared: "1/05/2020"
            },
            {
                userName: "RubberDuckyEmperror",
                tsumMatched: "930",
                dateCleared: "12/22/2019"
            },
            {
                userName: "blueIphoneUser",
                tsumMatched: "1234",
                dateCleared: "12/22/2019"
            },
            {
                userName: "Yellow Ranger",
                tsumMatched: "435",
                dateCleared: "12/22/2019"
            },
            {
                userName: "7Leaves Master",
                tsumMatched: "732",
                dateCleared: "12/22/2019"
            },
            {
                userName: "Tsum Addict",
                tsumMatched: "931",
                dateCleared: "12/22/2019"
            }
        ];
    }
    loadLeaderBoard(){
        this.createTable();
    }
    createTable(){
        var th3 = $("<th>")
                        .text("Date");
        var th2 = $("<th>")
                        .text("Tsum Matched");
        var th1 = $("<th>")
                        .text("UserName");

        var trLeaderBoard = $("<tr>")
                        .append(th1,th2,th3);

        var theadLeaderBoard = $("<thead>")
                        .append(trLeaderBoard)

            theadLeaderBoard.appendTo(tableLeaderBoard);
        
        var tbodyLeaderBoard = $("<tbody>")
                        .attr('id','tbodyLeaderBoard');


        var tableLeaderBoard = $("<table>")
                        .attr('id','tableLeaderBoard')
                        .append(theadLeaderBoard,tbodyLeaderBoard);

        $("#bodyRenderStage").append(tableLeaderBoard);

        for (var i = 0; i < this.objectArray.length; i++){
            this.loadData(this.objectArray[i]);
        }
    } 
    loadData(param){
        var td3 = $("<td>")
                        .text(param.dateCleared);
        var td2 = $("<td>")
                        .text(param.tsumMatched);
        var td1 = $("<td>")
                        .text(param.userName);

        var trData = $("<tr>")
                        .append(td1,td2,td3);

        trData.appendTo("#tbodyLeaderBoard");
    }
}