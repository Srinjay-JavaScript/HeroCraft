canvas = new fabric.Canvas("myCanvas");
heroX = 10;
heroY = 10;
part_width = 50;
part_height = 50;

var part_object = "";
function heroUpdate(){
    fabric.Image.fromURL("IronMove.png", function(Img){
    hero_object = Img;
    hero_object.scaleToWidth(150);
    hero_object.scaleToHeight(150);
    hero_object.set({
    top: heroY,
    left: heroX
    });
    canvas.add(hero_object);
    });
}
 
 
 function part(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        part_object = Img;
        part_object.scaleToWidth(part_width);
        part_object.scaleToHeight(part_height);
        part_object.set({
        top: heroY,
        left: heroX
        });
        canvas.add(part_object);
        });  
 }

 window.addEventListener("keydown", userKeyDown);

 function userKeyDown(e){
    if (e.keyCode == "65"){
        console.log("User clicked on the \"A\" key.");
        part("thor_right_hand.png");
    }
    else if (e.keyCode == "66"){
        console.log("User clicked on the \"B\" key.");
        part("spiderman_left_hand.png");
    }
    else if (e.keyCode == "67"){
        console.log("User clicked on the \"C\" key.");
        part("ironman_legs.png");
    }
    else if (e.keyCode == "68"){
        console.log("User clicked on the \"D\" key.");
        part("spiderman_face.png");
    }
    else if (e.keyCode == "69"){
        console.log("User clicked on the \"E\" key.");
        part("hulkd_body.png");
    }
    else if (e.keyCode == "70"){
        console.log("User clicked on the \"F\" key.");
        part("hulk_right_hand.png")
    }
    else if (e.keyCode == "71"){
        console.log("User clicked on the \"G\" key.");
        part("ironman_body.png");
    }
    else if (e.keyCode == "72"){
        console.log("User clicked on the \"H\" key.");
        part("thor_left_hand.png");
    }
    else if (e.keyCode == "73"){
        console.log("User clicked on the \"I\" key.");
        part("hulk_left_hand.png");
    }
    else if (e.keyCode == "74"){
        console.log("User clicked on the \"J\" key.");
        part("thor_face.png");
    }
    else if (e.keyCode == "75"){
        console.log("User clicked on the \"K\" key.");
        part("ironman_face.png");
    }
    else if (e.keyCode == "76"){
        console.log("User clicked on the \"L\" key.");
        part("captain_america_left_hand.png");
    }
    else if (e.keyCode == "77"){
        console.log("User clicked on the \"M\" key.");
        part("ironman_right_hand.png");
    }
    else if (e.keyCode == "78"){
        console.log("User clicked on the \"N\" key.");
        part("ironman_left_hand.png");
    }
    else if (e.keyCode == "79"){
        console.log("User clicked on the \"O\" key.");
        part("hulk_face.png");
    }
    else if (e.keyCode == "80"){
        console.log("User clicked on the \"P\" key.");
        part("hulk_legs.png");
    }
    else if (e.keyCode == "81"){
        console.log("User clicked on the \"Q\" key.");
        part("spiderman_right_hand.png");
    }
    else if (e.keyCode == "82"){
        console.log("User clicked on the \"R\" key.");
        part("spiderman_body.png");
    }
    else if (e.keyCode == "83"){
        console.log("User clicked on the \"S\" key.");
        part("spiderman_legs.png");
    }
    else if (e.keyCode == "37"){
        left();
        console.log("User clicked on the \"left\" arrow.");
    }
    else if (e.keyCode == "38"){
        up();
        console.log("User clicked on the \"up\" arrow.");
    }
    else if (e.keyCode == "39"){
        right();
        console.log("User clicked on the \"right\" arrow.");
    }
    else if (e.keyCode == "40"){
        down();
        console.log("User clicked on the \"down\" arrow.");
    }
    else if (e.shiftKey == true && e.keyCode == "107"){
        part_width = part_width + 10;
        part_height = part_height + 10;
        console.log("Current Width: ".concat(part_width));
        console.log("Current Height: ".concat(part_height));
        document.getElementById("current_width").innerHTML = part_width;
        document.getElementById("current_height").innerHTML = part_height;

    }
    else if (e.shiftKey == true && e.keyCode == "109"){
        part_width = part_width - 10;
        part_height = part_height - 10;
        console.log("Current Width: ".concat(part_width));
        console.log("Current Height: ".concat(part_height));
        document.getElementById("current_width").innerHTML = part_width;
        document.getElementById("current_height").innerHTML = part_height;

    }
    
 }
 function up(){
    heroUpdate();
    if (heroY >= 0){
        heroY = heroY - 10;
        console.log("heroX: ".concat(heroX) + "heroY: " + heroY);
    }
    canvas.remove(hero_object); 
    
}
function down(){
   heroUpdate();
   if (heroY <= 350){
       heroY = heroY + 10;
       console.log("heroX: ".concat(heroX) + "heroY: " + heroY);
   }
   canvas.remove(hero_object);
}
function right(){
   heroUpdate();
   if (heroX <= 850){
       heroX = heroX + 10;
       console.log("heroX: ".concat(heroX) + "heroY: " + heroY);
   }
   canvas.remove(hero_object);
}
function left(){
   heroUpdate();
   if (heroX >= 0){
       heroX = heroX - 10;
       console.log("heroX: ".concat(heroX) + "heroY: " + heroY)
   }
   canvas.remove(hero_object);
}