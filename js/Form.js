class Form{
    constructor(){
    }

    display(){
        var title = createElement("h2");
        title.html("BMW Racing Game");
        title.position(130,0);

        var input = createInput("Name");
        input.position(130,160);

        var button = createButton("Get 1,00,00,000 rupees by clicking this button");
        button.position(250,200);

        var greeting = createElement("h3");
        
        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name = input.value();

            playerCount = playerCount + 1;

            player.update(name);
            player.updateCount(playerCount);

            greeting.html("Hello"+ name  + "Pls wait for more racers to join the race. Have some popcorn and relax");
            greeting.position(130,160);
        });
    }
}