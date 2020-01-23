class EventListeners{
    addEventListeners(){
        this.navBinders();
    }
    navBinders(){
        $("#liHome").click(function(){
            console.log("you are home now");
        })

        $("#liLeaderBoard").click(function(){
            console.log("you are now at leaderboards :D");
        })
    }
}