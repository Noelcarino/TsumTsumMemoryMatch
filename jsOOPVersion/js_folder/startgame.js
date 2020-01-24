class StartGame{
    constructor(){
        this.state = {
            gameStarted: false,
            cardsLoaded: false,
        }
        this.card10Clicked = 10;
        this.cardArray = [1,1,2,2,3,3,4,4,5,6];
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
    loadCards(param){
        this.shuffle(this.cardArray);
        console.log()
        var bodyRenderStage = $("#bodyRenderStage")
        var card; 
        if (this.card10Clicked === 30){
            console.log("TOO MANY CARDS");
            return;
        }
        if (param === true){
            this.card10Clicked += 10;
        }
        for (var i = 0; i < this.cardArray.length; i++){
            card = $("<div>")
                .attr('id', "card-" + i)
                .text(i)
                .addClass("card" + " card-" + this.cardArray[i]);
            card.appendTo(bodyRenderStage);
            $("#card-"+i).on('click',this.handleCardClick);
        }

    }
    handleCardClick(event){


        // if(parseInt(event.target.id.slice(5)) % 10 === 0){
        //     console.log("LOADING 10 MORE CARDS");
        //     this.loadCards(true);
        //     return;
        // }

        if (this.firstCardClicked === null){
            this.firstCardClicked = event.target.id.slice(5);
            return;
        }
        if (event.target.id.slice(5) === this.firstCardClicked){
            console.log("You clicked this card already!");
            return;
        }
        if (this.secondCardClicked === null){
            this.secondCardClicked = event.target.id.slice(5);
        }

        if (this.firstCardClicked !== null && this.secondCardClicked !== null){
            this.firstCardClicked = null;
            this.secondCardClicked = null;
            return;
        }
    }
    shuffle(array){
        let counter = array.length;
        while(counter > 0){
            let index = Math.floor(Math.random() * counter);
            counter --;
            let temp = array[counter];
            array[counter] = array[index];
            array[index] = temp;
        }
        return array;
    }
}