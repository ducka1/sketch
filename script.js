const container = document.querySelector("#container")
let size = 16;

for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) { 
        container.appendChild(document.createElement("div")).classList.add("tile");
    }
}

const tiles = document.querySelectorAll(".tile");
let tileSize = 900 / size;

tiles.forEach((tile) => {
    tile.style.height = tileSize + "px";
    tile.style.width = tileSize + "px";
    tile.addEventListener("mouseover", () => {
        tile.style.backgroundColor = "orangered";
    });
    // tile.addEventListener('mouseout', () => {
    //     tile.style.backgroundColor = 'darkorange';
    // });
});

const btn = document.querySelector("#btn");

btn.addEventListener('click', () => {
    alert('hello');
});