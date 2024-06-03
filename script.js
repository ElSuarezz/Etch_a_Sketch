const container = document.querySelector(".container");


function makeGrid(size){
    
    for(i=0; i<(size*size); i++){
        const gridItem = document.createElement("div")
        gridItem.classList.add ("box")
        container.appendChild(gridItem);
        gridItem.addEventListener('mouseover', changeColor)
        gridItem.addEventListener('mouseout', eraseColor)
    }     
}

makeGrid(16);


function changeColor(e) {
    e.currentTarget.style.backgroundColor = 'aquamarine';
}

function eraseColor(e) {
    setTimeout(() => {
        e.target.style.backgroundColor = 'white';
        
    }, 3000);
}