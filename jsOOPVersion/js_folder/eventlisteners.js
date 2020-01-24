class EventListeners{
    constructor(){
        this.navBinders = this.navBinders.bind(this);
        this.loadLeaderBoard = this.loadLeaderBoard.bind(this);
    }
    addEventListeners(){
        this.navBinders();
    }
    loadHomePage(){
        var loadStartButton;
        loadStartButton = new StartGame();
        loadStartButton.loadStartButton();
    }
    loadLeaderBoard(){
        var leaderBoard;
        leaderBoard = new LeaderBoard();
        leaderBoard.loadLeaderBoard();
    }
    navBinders(){
        var homePage = this.loadHomePage;
        var leaderBoard = this.loadLeaderBoard;
        
        $("#liHome").click(function(){
            $("#bodyRenderStage").empty().append(homePage);
        })

        $("#liLeaderBoard").click(function(){
            $("#bodyRenderStage").empty().append(leaderBoard);
        })
    }
}