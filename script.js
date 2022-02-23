const container_div = document.getElementById('content-draw');
const rangeValue_div = document.getElementById('range-value');
const default_button = document.getElementById('default-button');
const rainbow_button = document.getElementById('rainbow-button');
const eraser_button = document.getElementById('eraser-button');
const eraseAll_button = document.getElementById('eraseAll-button');
const resize_button = document.getElementById('resize-button');

//Get the dimension value inputed by user, calculate the size of the little squares and 
//send to createPixel function.

function getPixelDimension() {
    const boardDimension = Number(prompt('Choose the board dimension:'))
    const pixelDimension = `${480/boardDimension}px`
    createBoard(boardDimension, pixelDimension)
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

//This function serves to resize the board

//resize_button.addEventListener('click', function(){
//    for(i=0;i<pixelsArray.length; i++){
//    container_div.removeChild(pixelsArray[i]);
//    }
//    getPixelDimension();
//})



//Get all little square divs and add a event listener to them. if the mouse pass over,
//the background color changes to black.
const pixelsArray = [].slice.call(document.getElementsByClassName('pixel-style'));

pixelsArray.forEach(function(elem) {
    elem.addEventListener("mouseover", function(e) {
        if(e.buttons === 0) {
            elem.style.backgroundColor = 'black';
            console.log(e.buttons)
        }
        else{
        }
        
    });
})

