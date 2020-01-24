class EventListeners{
    constructor(){
        this.navBinders = this.navBinders.bind(this);
        this.loadLeaderBoard = this.loadLeaderBoard.bind(this);
    }
    addEventListeners(){
        this.navBinders();
    }
    loadLeaderBoard(){
        console.log("You have loaded LeaderBoards");
    }
    navBinders(){
        // var leaderBoard = this.loadLeaderBoard;
        $("#liHome").click(function(){
            console.log("you are home now");
        })

        $("#liLeaderBoard").click(function(){
            this.loadLeaderBoard();
        })
    }
}