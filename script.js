const container_div = document.getElementById('content-draw');
const rangeValue_div = document.getElementById('range-value');
const default_button = document.getElementById('default-button');
const eraser_button = document.getElementById('eraser-button');
const eraseAll_button = document.getElementById('eraseAll-button');
const resize_button = document.getElementById('resize-button');

//Get the dimension value inputed by user, calculate the size of the little squares and 
//send to createPixel function.

function getPixelDimension() {
    const boardDimension = Number(prompt('Choose the board size:\n(Max = 100)'));
    const pixelDimension = `${480/boardDimension}px`;
    
    if(boardDimension > 0 & boardDimension <= 100) {
        createBoard(boardDimension, pixelDimension);
    }
    else{
        createBoard(16,'30px');
    }
}

//Creates the square divs that fill the big white board with the takeDimension function.
function createBoard(bD, pD){
    for(let i=0; i<bD**2; i++){
        const pixel = document.createElement('div');
        pixel.style.height = pD;
        pixel.style.width = pD;
        container_div.appendChild(pixel);
        pixel.classList.add('pixel-style');
    };
}

getPixelDimension()


//Get all little square divs and add a event listener to them. if the mouse pass over,
//the background color changes to black.
const pixelsArray = [].slice.call(document.getElementsByClassName('pixel-style'));

function changecolor(cursorcolor){
pixelsArray.forEach(function(elem) {
    elem.addEventListener("mouseover", function(e) {
        if(e.buttons === 0) {
            elem.style.backgroundColor = cursorcolor;
        }
        else{
        }
        
    });
});
};

//Calls the changecolor function with the default black color when the page loads.
changecolor('black')



//This function serves to resize the board
resize_button.addEventListener('click', function(){
    window.location.reload();
});

//This button serves to erase all the board
eraseAll_button.addEventListener('click', function(){
    pixelsArray.forEach(function(elem) {
    elem.style.backgroundColor = 'white';
    });
});

//This button serves to erase all the board
eraser_button.addEventListener('click', function(){
    default_button.style.backgroundColor = '#EFEFEF'
    eraser_button.style.backgroundColor = '#04AA6D'
    changecolor('white');
});

default_button.addEventListener('click', function(){
    default_button.style.backgroundColor = '#04AA6D'
    eraser_button.style.backgroundColor = '#EFEFEF'
    changecolor('black');
});
