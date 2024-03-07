const dino = document.getElementById("dino");
var cactus = document.getElementById("cactus");

function jump(){
    if(dino.classList != "jump"){
        dino.classList.add("jump");
    }
    
    setTimeout(function(){
        dino.classList.remove("jump")
    }, 300)
}

let collision = setInterval(function(){

    // Get Dino Y position
   let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
   // console.log("dino", dinoTop); 

   // Get Cactus X position
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    // console.log("cactus", cactusLeft);


    // Crash
    if(cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140){
        // console.log("collision");
        cactus.style.animation = "none";
        cactus.style.display = "none";
        alert("Whump whump");

    }

}, 10)


document.addEventListener("keyup", function(event){
    jump();
})

