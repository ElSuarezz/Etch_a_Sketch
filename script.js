const container = document.querySelector(".grid");
let rows = 17
let columns = 16


for(i=0; i<rows; i++){
    for(j=0;j<columns;j++){
        const gridItem = document.createElement("div")
        gridItem.classList.add ("row")
        container.appendChild(gridItem);
    }     
}



