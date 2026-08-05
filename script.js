let Num = 16



const makeGrid = (Num) => {
    const initialGrid = document.querySelector(".container")
    initialGrid.style.display = "flex"
    initialGrid.style.flexFlow = "row wrap"
    initialGrid.style.height = "256px"
    initialGrid.style.width = "256px"
    gridColumns(initialGrid, Num)
}

function gridColumns(initialGrid, Num){
    //const initialGrid = document.querySelector(".container")
    for(let i=0; i<Num; i++){
        const column = document.createElement("div")
        column.className = "line"
        // column.style.flex = "1 1 auto"
        // column.style.flexDirection = "column"

        column.style.width = `${256/Num}px` 
        // gig
        gridCells(column, Num);
        initialGrid.appendChild(column) 
        
    }
    
}

function gridCells(column, Num){
    //const getColumns = document.querySelector(".line")
    for(let i=0; i<Num; i++){
        const cell = document.createElement("div")
        cell.className = "square"
        //cell.style.flex = "1 1 auto"
        cell.style.height = `${256/Num}px`
        //cell.innerText = "."
        column.appendChild(cell)  
    }
}


makeGrid(Num)

// code to get random color using rgb
const getColor = () => {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random()* 256)
    const b = Math.floor(Math.random() * 256)

    return `rgb(${r}, ${g}, ${b})`
}

//used container so that the event occurs on the whole grid instead of each cell.
const div = document.querySelector(".container")

//event.target listen for the event(ie the mouse being over the cell) and runs event code. 
//the const above led to the event.target being applied on the whole container and inherited by cells think parentNode and child
div.addEventListener("mouseover", (event) => {
    const mouseEnter = event.target
    mouseEnter.style.backgroundColor = getColor()
    
})

div.addEventListener("mouseout", (event) => {
    const mouseEnter = event.target
    mouseEnter.style.backgroundColor = getColor()
    
})

const newGridButton = document.querySelector("button")

newGridButton.addEventListener("click", () => {
    const grid = document.querySelector(".container")
    grid.innerHTML = ""
    const newNum = prompt ("Enter grid size:")
    let max = 100
    makeGrid(newNum)
    console.log(newNum)
})

    
