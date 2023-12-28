let boxes = document.querySelectorAll(".box");
let h2 = document.querySelector("h2");
let resetBtn = document.querySelector(".reset");

let turnO = true;
h2.innerHTML = "O Turn"
let winCases = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function checkWin() {
    winCases.forEach((cases) => {
        let val1 = cases[0];
        let val2 = cases[1];
        let val3 = cases[2];

        if((boxes[val1].innerHTML === boxes[val2].innerHTML && boxes[val2].innerHTML === boxes[val3].innerHTML) && 
            (boxes[val1].innerHTML != "" && boxes[val2].innerHTML != "" && boxes[val3] != "")) {
                boxes.forEach((box)=>{
                    box.disabled = true;
                })
                h2.innerHTML = `${boxes[val1].innerHTML} Wins !!!`;
                resetBtn.innerHTML = "Play again";
        }
    })
}

boxes.forEach((elem) => {
    elem.addEventListener("click", () => {
        if (turnO) {
            h2.innerHTML = "X turn"
            elem.innerHTML = "O";
            turnO = false;
        }
        else {
            h2.innerHTML = "O Turn";
            elem.innerHTML = "X";
            turnO = true;
        }
        checkWin();
        elem.disabled = true;
    })
})

function resetGame(){
    boxes.forEach((box)=>{
        box.innerHTML = "";
        box.disabled = false;
        turnO = true;
        h2.innerHTML = `${turnO === true ? "O" : "X"} Turn`;
        resetBtn.innerHTML = "Reset";
    })
}



