/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
//A variable for the current player whose turn is to play,
//and it will be declared using "let" because it changes
//every round. eg: X turn -> O turn -> X turn ...
let currentPlayer = "X";
let moveCount = 0;
let isGameOver = false;





/*------------------------ Cached Element References ------------------------*/
//Selecting the message (h2 tag)
const messageElement = document.querySelector("#message");
//Selecting the boxes
const squareOneElement = document.getElementById("0");
const squareTwoElement = document.getElementById("1");
const squareThreeElement = document.getElementById("2");
const squareFourElement = document.getElementById("3");
const squareFiveElement = document.getElementById("4");
const squareSixElement = document.getElementById("5");
const squareSevenElement = document.getElementById("6");
const squareEightElement = document.getElementById("7");
const squareNineElement = document.getElementById("8");
//Selecting the reset button
const resetButton = document.querySelector("#reset");






/*------------------------ Functions or Manipulation ------------------------*/
messageElement.textContent = currentPlayer + "'s" + " turn";
function switchPlayer() {
    if (isGameOver !== true) {
        if (currentPlayer === "X") {
                currentPlayer = "O";
                messageElement.textContent = currentPlayer+ "'s"+ " turn";
            }
            else {
                currentPlayer = "X";
                messageElement.textContent = currentPlayer+ "'s"+ " turn";
            }
        }
}
function handleMove(clickedElement) {
    if (clickedElement.textContent==="" && isGameOver!==true){
        clickedElement.textContent = currentPlayer;
        moveCount++;
        checkHeWins();
        checkForTie();
        switchPlayer();
    }
}
function checkHeWins() {
    //For row 1:
    if (squareOneElement.textContent===currentPlayer && 
        squareTwoElement.textContent===currentPlayer && 
        squareThreeElement.textContent===currentPlayer) {
            isGameOver = true;
            messageElement.textContent = currentPlayer + " win the game";
    }
    //For row 2:
    if (squareFourElement.textContent===currentPlayer && 
        squareFiveElement.textContent===currentPlayer && 
        squareSixElement.textContent===currentPlayer) {
            isGameOver = true;
            messageElement.textContent = currentPlayer + " win the game";
    }
    //For row 3:
    if (squareSevenElement.textContent===currentPlayer && 
        squareEightElement.textContent===currentPlayer && 
        squareNineElement.textContent===currentPlayer) {
            isGameOver = true;
            messageElement.textContent = currentPlayer + " win the game";
    }
    //For column 1:
    if (squareOneElement.textContent===currentPlayer && 
        squareFourElement.textContent===currentPlayer && 
        squareSevenElement.textContent===currentPlayer) {
            isGameOver = true;
            messageElement.textContent = currentPlayer + " win the game";
    }
    //For column 2:
    if (squareTwoElement.textContent===currentPlayer && 
        squareFiveElement.textContent===currentPlayer && 
        squareEightElement.textContent===currentPlayer) {
            isGameOver = true;
            messageElement.textContent = currentPlayer + " win the game";
    }
    //For column 3:
    if (squareThreeElement.textContent===currentPlayer && 
        squareSixElement.textContent===currentPlayer && 
        squareNineElement.textContent===currentPlayer) {
            isGameOver = true;
            messageElement.textContent = currentPlayer + " win the game";
    }
    //For diagonal (left to right):
    if (squareOneElement.textContent===currentPlayer && 
        squareFiveElement.textContent===currentPlayer && 
        squareNineElement.textContent===currentPlayer) {
            isGameOver = true;
            messageElement.textContent = currentPlayer + " win the game";
    }
    //For diagonal (right to left):
    if (squareThreeElement.textContent===currentPlayer && 
        squareFiveElement.textContent===currentPlayer && 
        squareSevenElement.textContent===currentPlayer) {
            isGameOver = true;
            messageElement.textContent = currentPlayer + " win the game";
    }
}

function checkForTie() {
    if (moveCount===9 && isGameOver!==true) {
        messageElement.textContent = "The game is tie";
        isGameOver = true;
    }
}

function resetBtn() {
    //Empty the boxes
    squareOneElement.textContent = "";
    squareTwoElement.textContent = "";
    squareThreeElement.textContent = "";
    squareFourElement.textContent = "";
    squareFiveElement.textContent = "";
    squareSixElement.textContent = "";
    squareSevenElement.textContent = "";
    squareEightElement.textContent = "";
    squareNineElement.textContent = "";

    currentPlayer = "X";
    moveCount = 0;
    isGameOver = false;
    messageElement.textContent = "X's turn";
}


/*----------------------------- Event Listeners -----------------------------*/
//Event listener for the boxes
squareOneElement.addEventListener("click", () => {
    handleMove(squareOneElement);
});
squareTwoElement.addEventListener("click", () => {
    handleMove(squareTwoElement);
});
squareThreeElement.addEventListener("click", () => {
    handleMove(squareThreeElement);
});
squareFourElement.addEventListener("click", () => {
    handleMove(squareFourElement);
});
squareFiveElement.addEventListener("click", () => {
    handleMove(squareFiveElement);
});
squareSixElement.addEventListener("click", () => {
    handleMove(squareSixElement);
});
squareSevenElement.addEventListener("click", () => {
    handleMove(squareSevenElement);
});
squareEightElement.addEventListener("click", () => {
    handleMove(squareEightElement);
});
squareNineElement.addEventListener("click", () => {
    handleMove(squareNineElement);
});

//Event listener for the reset button
resetButton.addEventListener("click", resetBtn);