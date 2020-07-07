
var noSquare = 6;
var colors = sixColor(noSquare);

var square= document.querySelectorAll(".square");
var message = document.querySelector("#message");

var bttn = document.querySelectorAll(".mode");

var pickedColor = pickColor();
var heading = document.querySelector("#colorDisplay")
heading.innerHTML = pickedColor;

for(i = 0; i < bttn.length; i++ ){
    bttn[i].addEventListener("click", function(){
        bttn[0].classList.remove("selected");
        bttn[1].classList.remove("selected");
        this.classList.add("selected");
        if( this === bttn[0]){
           noSquare = 3;
           for(i=3; i < square.length; i++){
            square[i].style.display = "none";
            }
        }else{
            noSquare = 6;
            for(i=3; i<square.length; i++){
            square[i].style.display = "block";
            }
        }
        colors = sixColor(noSquare);
        pickedColor = pickColor();
        heading.innerHTML = pickedColor;
        message.innerHTML = "";
        reset()
    })
}


reset();
function reset(){for(i=0; i< colors.length; i++){
   square[i].style.backgroundColor = colors[i]
   square[i].addEventListener("click", function(){
       //grabColor
       var grabColor = this.style.backgroundColor
       if(grabColor === pickedColor){
           changeColor(grabColor);
           message.innerHTML = "Correct!"
           //change h1 color
           document.querySelector("h1").style.backgroundColor = grabColor;
           btt.innerHTML = "Play Again?"
       }else{ 
           message.innerHTML = "Try Again!"
           this.style.backgroundColor = "#232323";
    }
    
})
}
}


// Correct color change

function changeColor(color) {
    for(i=0; i< square.length; i++){
        square[i].style.backgroundColor = color;
    }
}


//Random Color

function pickColor(){
    randomNumber = Math.floor(Math.random()*colors.length);
    return colors[randomNumber];
}

// Generating 3 random number for rgb color
function randomNumbers(){
    var n1 = Math.floor(Math.random()*256);
    var n2 = Math.floor(Math.random()*256);
    var n3 = Math.floor(Math.random()*256);
    return "rgb(" + n1 + ", " + n2 +", " + n3 + ")";
}

//Generate 6 random color using rgb an push it into the colors array

function sixColor(num) {
    var colorArr = [];
    for( var i = 0; i < num; i++){
        var color = randomNumbers()
        colorArr.push(color)
    } 
    return colorArr;
}



// strip
var btt = document.querySelector("#reset");

//reset button
btt.addEventListener("click", function(){
    //generate all new colors
    colors = sixColor(noSquare);
    //pick a new random color from array
    pickedColor = pickColor();
   //change colors of suaqres
    reset();
    // change title heading
    heading.innerHTML = pickedColor;
    //change reset button
    btt.innerHTML = "New Colors"
    document.querySelector("h1").style.backgroundColor = "steelblue";
    message.innerHTML = "";
})
