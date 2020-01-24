class StartGame{
    loadStartButton(){
        console.log("button being loaded");


        var startButton = $("<button>")
                            .attr('id','startButton')
                            .text("start game");
        
        startButton.appendTo("#bodyRenderStage")

        if ($("#startButton").is(":hidden")){
            console.log("hello");
            $("#startButton").slideDown("slow");

        } else {
            console.log("not hidden");
        }
    }
}