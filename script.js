const container = document.querySelector("#container")
const btn = document.querySelector("#btn");

btn.addEventListener('click', () => {
    let size = parseInt(prompt("Enter the new size of the grid (under 101)", "16"));
    if (size > 100) {
        alert('The number you entered is too big');
    } else {
        container.replaceChildren() // remove grid
        createGrid(size);
    }
});

function createGrid(size) {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) { 
            container.appendChild(document.createElement("div")).classList.add("tile");
        }
    }

    let tiles = document.querySelectorAll(".tile");
    let tileSize = 900 / size;

    tiles.forEach((tile) => {
        tile.style.height = tileSize + "px";
        tile.style.width = tileSize + "px";
        tile.addEventListener("mouseover", () => {
            tile.style.backgroundColor = "orangered";
        });
    });
}

createGrid(16);