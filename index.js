console.log("Welcome to the Tic Tac Toe game of Muzamil!");

let music = new Audio("./Music/music.mp3");
let audioTurn = new Audio("./Music/ting.mp3");
let gameOver = new Audio("./Music/gameover.mp3");
let turn = "X";

const changeTurn = () => {
    turn = turn === "X" ? "O" : "X";
    return turn;
};

// Function to check who wins
// Function to check who wins
let checkWin = () => {
    let boxTexts = document.querySelectorAll(".box-text");
    let win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    win.forEach(e => {
        if (
            boxTexts[e[0]].innerText === boxTexts[e[1]].innerText &&
            boxTexts[e[1]].innerText === boxTexts[e[2]].innerText &&
            boxTexts[e[0]].innerText !== "" && // Ensure the element has text content
            boxTexts[e[1]].innerText !== "" &&
            boxTexts[e[2]].innerText !== ""
        ) {
            document.querySelector(".info").innerText = boxTexts[e[0]].innerText + " won";
        }
    });
};


// Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(box => {
    box.addEventListener('click', () => {
        if (box.innerText === '') {
            box.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            document.getElementsByClassName("turn")[0].innerText = "Turn for " + turn;
        }
    });
});

// Add event listener for the reset button
// Add event listener for the reset button
document.getElementById('reset').addEventListener('click', () => {
    console.log("Reset button clicked"); // Check if this message appears in the console
    let boxTexts = document.querySelectorAll(".box-text");
    boxTexts.forEach(element => {
        element.textContent = ""; // Use textContent instead of innerText for better cross-browser compatibility
    });
});
