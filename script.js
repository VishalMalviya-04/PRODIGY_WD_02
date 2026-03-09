const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");

let currentPlayer = "X";
let gameState = ["","","","","","","","",""];

const winPatterns = [
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
];

cells.forEach(cell => {
    cell.addEventListener("click", handleClick);
});

function handleClick(){

    const index = this.dataset.index;

    if(gameState[index] !== "") return;

    gameState[index] = currentPlayer;

    this.textContent = currentPlayer;

    if(currentPlayer === "X"){
        this.classList.add("x");
    }else{
        this.classList.add("o");
    }

    if(checkWinner()){
        statusText.textContent = currentPlayer + " Wins!";
        return;
    }

    if(!gameState.includes("")){
        statusText.textContent = "Draw!";
        return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function checkWinner(){

    for(let pattern of winPatterns){

        const [a,b,c] = pattern;

        if(
            gameState[a] &&
            gameState[a] === gameState[b] &&
            gameState[a] === gameState[c]
        ){
            return true;
        }
    }

    return false;
}

function restartGame(){
    location.reload();
}