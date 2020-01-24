class StartGame{
    constructor(){
        this.startgame = this.startgame.bind(this);
        this.loadCards = this.loadCards.bind(this);
    }
    loadStartButton(){
        console.log("button being loaded");


        var startButton = $("<button>")
                            .attr('id','startButton')
                            .text("START");
        
        startButton.appendTo("#bodyRenderStage")

        if ($("#startButton").is(":hidden")){
            $("#startButton").slideDown("slow");
        } 
        this.startgame();
    }
    startgame(){

        $('#startButton').click(function(){
            $("#startButton").hide();
        })
        $("#startButton").click(this.loadCards);

    }
    loadCards(){
        console.log("cards loaded");
    }
}