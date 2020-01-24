class StartGame{
    constructor(){
        this.state = {
            gameStarted: false,
            cardsLoaded: false,
        }
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
        var bodyRenderStage = $("#bodyRenderStage")

        var card; 
        
        for (var i = 0; i <12; i++){

            card = $("<div>")
                .attr('id', i)
                .addClass("card");
            card.appendTo(bodyRenderStage);

        }
       


        console.log("cards loaded");
    }
}