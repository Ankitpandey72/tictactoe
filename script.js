const newAgain = document.getElementById("new-again");

let btts = document.querySelectorAll(".btt");
const win = document.getElementById("win");

const displays = document.getElementById("displays");

const resets = document.querySelector(".reset");

const newgames = document.querySelector(".newgame");

const full = document.getElementById("full");

let turnO = true;

const winnerpattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];





btts.forEach((btt) => {
    btt.addEventListener("click", () => {
        if (turnO) {
            // console.log("O");
            
            btt.innerHTML = "O";
            btt.disabled = true;
            turnO = false;

        }
        else {
            // console.log("X");
            btt.innerHTML = "X";
            btt.disabled = true;
            turnO = true;
        }

        checkpattern();


    })
})


//checking patterns
const checkpattern = () => {
    let drawch = 0;
    for (pattern of winnerpattern) {

        let val1 = btts[pattern[0]].innerHTML;
        let val2 = btts[pattern[1]].innerHTML;
        let val3 = btts[pattern[2]].innerHTML;

        if (val1 != '' && val2 != '' && val3 != '') {

            if (val1 == val2 && val2 == val3) {
                console.log("winner is ", val1);

                win.innerHTML = "Winner is " + val1;
                newAgain.innerHTML = "New Game";
                displays.style.display = "block";
                drawch++;
                full.style.display = "none";

                buttDisable();
            }


        }
    }

    if (drawch == 0) {
        checkDraw();
    }
}


//disabling buttons
const buttDisable = (btt) => {
    for (btt of btts) {
        btt.disabled = true;
    }
}


// for new games
newgames.addEventListener("click", () => {

    buttenable();
    displays.style.display = 'none';
    full.style.display = "block";

})


//enabling button
const buttenable = (btt) => {
    for (btt of btts) {
        btt.disabled = false;
        btt.innerHTML = '';
    }
}



// checking for Draw
const checkDraw = () => {

    if (btts[0].innerHTML != '' && btts[1].innerHTML != '' && btts[2].innerHTML != '' && btts[3].innerHTML != '' && btts[4].innerHTML != '' && btts[5].innerHTML != '' && btts[6].innerHTML != '' && btts[7].innerHTML != '' && btts[8].innerHTML != '') {
        console.log(btts[0].innerHTML);
        win.innerHTML = "Draw!";
        newAgain.innerHTML = "Play Again";
        displays.style.display = "block";
        full.style.display = "none";


    }

}


//for reset
resets.addEventListener("click", () => {

    if (btts[0].innerHTML == '' || btts[1].innerHTML == '' || btts[2].innerHTML == '' || btts[3].innerHTML == '' || btts[4].innerHTML == '' || btts[5].innerHTML == '' || btts[6].innerHTML == '' || btts[7].innerHTML == '' || btts[8].innerHTML == '') {
        buttenable();
        displays.style.display = 'none';
    }

})
