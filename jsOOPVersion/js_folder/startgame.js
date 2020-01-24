class StartGame{
    constructor(){
        this.state = {
            gameStarted: false,
            cardsLoaded: false,
        }
        this.firstCardClicked = null;
        this.secondCardClicked = null;
        this.startgame = this.startgame.bind(this);
        this.loadCards = this.loadCards.bind(this);
        this.handleCardClick = this.handleCardClick.bind(this);
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
        
        for (var i = 0; i < 12; i++){

            card = $("<div>")
                .attr('id', "card-" + i)
                .addClass("card");
            card.appendTo(bodyRenderStage);
            $("#card-"+i).on('click',this.handleCardClick);

        }


    }
    handleCardClick(event){

        if (this.firstCardClicked === null){
            this.firstCardClicked = event.target.id.slice(5);
            console.log('1 - ', this.firstCardClicked);
            return;
        }
        if (event.target.id.slice(5) === this.firstCardClicked){
            console.log("You clicked this card already!");
            return;
        }
        if (this.secondCardClicked === null){
            this.secondCardClicked = event.target.id.slice(5);
            console.log('2 - ', this.secondCardClicked)
        }

        if (this.firstCardClicked !== null && this.secondCardClicked !== null){
            console.log (this.firstCardClicked + " " + this.secondCardClicked);
            this.firstCardClicked = null;
            this.secondCardClicked = null;
            return;
        }
    }
}