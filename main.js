var canvas=new fabric.Canvas("my_canvas");
playerx=10;
playery=10;
blockwidth=30;
blockheight=30;
var playerobject = "";
var blockobject = "";
function playerupdate() {
fabric.Image.fromURL("player.png",function(Img){
    playerobject=Img;
    playerobject.scaleToWidth(150);
    playerobject.scaleToHeight(140);
    playerobject.set({
        top:playery,left:playerx
    });
    canvas.add(playerobject);
});
}

if(keypressed == "70")
{
    new_image("ironman_face.png");
    console.log("f key was pressed");
}

if(keypressed == "66")
{
    newImage("spiderman_body.png");
    console.log("b");
}

if(keypressed == "76")
{
    newImage("hulk_legs.png");
    console.log("l")
}

if(keypressed == "82")
{
    newImage("thor_right_hand.png");
    console.log("r")
}

if(keypressed == "72")
{
    newImage("captain_america_left_hand.png");
    console.log("r")
}

if(keypressed == "38")
{
    up();
    console.log("up was pressed")
}

