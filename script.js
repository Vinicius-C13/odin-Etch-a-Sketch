const container_div = document.getElementById('content-draw');
const rangeValue_div = document.getElementById('range-value');



//Creates the square divs that fill the big white board.
function createPixel(){
    for(let i=0; i<16*16; i++){
        const pixel = document.createElement('div');
        container_div.appendChild(pixel);
        pixel.classList.add('pixel-style');
    };
}


    createPixel()



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

