var colors = generateRandomColors(6);

var squares = document.querySelectorAll('.square');
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDispay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset'); 

resetButton.addEventListener('click', function(){
    // generate all new colors
    colors = generateRandomColors(6);
    // pick a new random color from array
    pickedColor = pickColor();
    // change the colors of squares on the page
    colorDisplay.textContent = pickedColor;
    for(var i =0; i <squares.length; i++){
    // add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    }
});




colorDisplay.textContent = pickedColor;

for(var i =0; i <squares.length; i++){
    // add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    
    // add click listeners to squares
    squares[i].addEventListener('click', function(){
        // grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        // compare color to picked color
        if(clickedColor === pickedColor){
            messageDispay.textContent = 'CORRECT!';
            resetButton.textContent = 'Play Again?'
            changeColors(clickedColor);
            h1.style.backgroundColor = pickedColor;
        } else {
            this.style.backgroundColor = '#232323';
            messageDispay.textContent = 'Try Again BITCH!';
        }
    });
    
}

function changeColors(color){
    //loop through all squares
    for(var i = 0; i < squares.length; i++){
    //change color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    // make an array
    var arr = [];
    // repeat num times
    for(var i = 0; i < num; i++){
        //get random color and push into arr
        arr.push(randomColor());
    }
    // return that array
    return arr;
}

function randomColor(){
    // pick a 'red' from 0 - 255
    var r = Math.floor(Math.random() * 255);
    // pick a 'green' from 0 - 255
    var g = Math.floor(Math.random() * 255);
    // pick a 'blue' from 0 - 255
    var b = Math.floor(Math.random() * 255);
    
    return 'rgb('+r+', '+g+', '+b+')';
    
}





