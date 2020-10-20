canvas = new fabric.Canvas("myCanvas");
heroX = 10;
heroY = 10;
part_width = 30;
part_height = 30;
var hero_object = "";
var part_object = "";

 function heroUpdate(){
     fabric.Image.fromURL("", function(Img){
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
        part_object.scaleToWidth(block_width);
        part_object.scaleToHeight(block_height);
        part_object.set({
        top: heroY,
        left: heroX
        });
        canvas.add(part_object);
        });  
 }

 window.addEventListener("keydown", userKeyDown);

 function userKeyDown(e){
    if (e.keyCode == "84"){
        console.log("User clicked on the \"T\" key.")
    }
    else if (e.keyCode == "68"){
        console.log("User clicked on the \"D\" key.")
    }
    else if (e.keyCode == "73"){
        console.log("User clicked on the \"I\" key.")
    }
    else if (e.keyCode == "72"){
        console.log("User clicked on the \"H \" key.")
    }
    else if (e.keyCode == "87"){
        console.log("User clicked on the \"W\" key.")
    }
    else if (e.keyCode == "89"){
        console.log("User clicked on the \"Y\" key.")
    }
    else if (e.keyCode == "85"){
        console.log("User clicked on the \"U\" key.")
    }
    else if (e.keyCode == "82"){
        console.log("User clicked on the \"R\" key.")
    }
    else if (e.keyCode == "67"){
        console.log("User clicked on the \"C\" key.")
    }
 }
 