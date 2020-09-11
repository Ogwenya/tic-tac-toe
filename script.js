const squares = document.querySelectorAll(".grid-div");
let currentPlayer = "playerX";
let player = document.getElementById("player");
let restartBtn = document.getElementById("restart");

document.addEventListener("DOMContentLoaded", function(){
    squares.forEach(square => {
        square.addEventListener("click", clickOutcome)
    });
    function clickOutcome(e){
        const squareArray = Array.from(squares);
        const index = squareArray.indexOf(e.target);
        player.innerHTML = currentPlayer;
        if(currentPlayer === "playerX"){
            squares[index].classList.add("playerX");
            currentPlayer = "playerO";
        }else{
            squares[index].classList.add("playerO");
            currentPlayer = "playerX";
        }
    }
});