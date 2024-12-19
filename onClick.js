
let colors = [
    "red", "blue", "green", "yellow", "purple", 
    "orange", "pink", "cyan", "lime", "brown", 
    "magenta", "turquoise", "violet", "indigo", "gray"
];

let currentColorIndex = 0;

function colourChange() {
    document.body.style.backgroundColor = colors[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % colors.length;
}
