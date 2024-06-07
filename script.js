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
    const randomBetween = (min, max) => min + Math.floor(Math.random () * (max - min +1));
    const r = randomBetween(0 ,255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    const rgb = `rgb(${r},${g},${b})`;
    
    e.currentTarget.style.backgroundColor = rgb
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

    }else if (input === null){
        makeGrid(16)    
    
    }else {
        makeGrid(gridSize);
    }

}