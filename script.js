const container = document.querySelector(".container");
const resetBtn = document.getElementById('resetBtn');
resetBtn.addEventListener('click', customGrid);


function makeGrid(size){
    let boxSize = (402/size) + "px";

    container.replaceChildren();
    for(i=0; i<(size*size); i++){
        const gridItem = document.createElement("div")
        gridItem.classList.add ("box")
        container.appendChild(gridItem);
        gridItem.setAttribute('style', `width:${boxSize}; height:${boxSize}`);
        gridItem.addEventListener('mouseover', changeColor)
        gridItem.addEventListener('mouseout', eraseColor)
    }     
}

makeGrid(16);


function changeColor(e) {
    e.currentTarget.style.backgroundColor = 'rgb(7, 235, 37)';
}

function eraseColor(e) {
    setTimeout(() => {
        e.target.style.backgroundColor = 'white';
        
    }, 3000);
}

function customGrid() {
    let input = prompt ('What will be your grid size? Choose from 1 to 100.')
    let gridSize = parseInt(input)

    if(gridSize < 1 || gridSize >100){
        alert('You must choose between 1 and 100.')
    
    }else {
        makeGrid(gridSize);
    }

}