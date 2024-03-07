var dino = document.getElementById("dino");
var cactus = document.getElementById("cactus");

function jump(){
    if(dino.classList != "animate"){
        dino.classList.add("animate");
    }
    
    setTimeout(function(){
        dino.classList.remove("animate");
    },500);
}