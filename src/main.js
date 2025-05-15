import './style.css'
import {animate, hover} from "motion";

const tongaGrid = document.querySelector('#tongaGrid');
const sun = "/sun.svg";
const moon = "/moon.svg";

function generateGrid() {
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
            const cellId = `cell-${i}${j}`;
            const cell = document.createElement('div');
            const cellInner = document.createElement('img');
            cell.className = "w-20 h-20 bg-blue-200 rounded-md cell";
            cell.id = cellId;
            tongaGrid.appendChild(cell);
            cell.appendChild(cellInner);

            hover(cell, (element) => {
                animate(element, { scale: 1.05 })

                return () => animate(element, { scale: 1 })
            })

            cell.addEventListener('click', () => {
                cellInner.src = cellInner.src.includes('sun.svg') ? moon : sun;
            })
        }
    }
}

generateGrid();