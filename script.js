
const gridBox = document.querySelector(".container")
const Num = 16

let size = 16

// code to get random color using rgb
const getColor = () => {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random()* 256)
    const b = Math.floor(Math.random() * 256)

    return `rgb(${r}, ${g}, ${b})`
}

function createColumns(Num){
    for(let i=0; i<Num; i++){
        const column = document.createElement("div")
        column.className ="col"
        column.style.height = Num
        createCells(Num, column)
        gridBox.appendChild(column)   
     }   
}

function createCells(Num, column){
    for(let i=0;i<Num; i++){
        const cell = document.createElement("div")
        cell.className = "cells"
        cell.style.width = Num
        column.appendChild(cell)
    }  
}

createColumns(Num)

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
    mouseEnter.style.backgroundColor = ""
})

const newGridButton = document.querySelector("button")

newGridButton.addEventListener("click", () => {
    const grid = document.querySelector(".container")
    grid.innerHTML = ""
    const newNum = prompt ("Enter grid size:")
    let max = 100
    createColumns(newNum, max)
    console.log(newNum)
})

    
