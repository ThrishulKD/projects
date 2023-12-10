const startGameBtn = document.getElementById('start-game-btn');


const ROCK = "ROCK";
const PAPER = "PAPER";
const SCICCOR = "SCICCOR";
const DEFALUT_CHOICE = ROCK;
const RESULT_WIN = "player wins";
const RESULT_LOST = "computer wins";
const RESULT_DRAW = "draw match";
let gameRunning = false;

const getPlayerChoice = () => {

    const selection = prompt(`${ROCK},${PAPER},${SCICCOR},`).toUpperCase();

    if (selection != ROCK && selection != PAPER && selection != SCICCOR) {

        alert(`invalid input , we have chosen ${DEFALUT_CHOICE} by default`)
        return;
    } else {
        return selection;
    }
}

const getComputerChoice = () => {

    const computerSelection = Math.random();
    if (computerSelection < 0.35) {
        return ROCK;
    } else if (computerSelection < 0.7) {
        return PAPER;
    } else {
        return SCICCOR;
    }

}

const getWinner = (cChoice, pChoice = DEFALUT_CHOICE) =>
    cChoice == pChoice ? RESULT_DRAW :
    (cChoice == ROCK && pChoice == PAPER ||
        cChoice == PAPER && pChoice == SCICCOR ||
        cChoice == SCICCOR && pChoice == ROCK) ? RESULT_WIN : RESULT_LOST;



// const getWinner = function(cChoice, pChoice) {
//     message = `player choosed ${pChoice} ,computer choosed ${cChoice} so `;

//     if (cChoice == pChoice) {

//         message = +message + "u had draw";
//         return RESULT_DRAW;
//     } else if (cChoice == ROCK && pChoice == PAPER ||
//         cChoice == PAPER && pChoice == ROCK ||
//         cChoice == SCICCOR && pChoice == ROCK) {
//         message = +message + "won";
//         return RESULT_WIN;
//     } else {
//         message = +message + "lost";
//         return RESULT_LOST;
//     }

// }


startGameBtn.addEventListener('click', () => {

    if (gameRunning) {
        return;
    }
    gameRunning = true;
    console.log("game is running");
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    let winner;
    if (playerChoice) {
        winner = getWinner(computerChoice, playerChoice);
    } else {
        winner = getWinner(computerChoice);
    }


    let message = `player choosed ${playerChoice|| DEFALUT_CHOICE} ,computer choosed ${computerChoice} so `;
    if (winner === RESULT_WIN) {
        message = message + "u won";
    } else if (winner === RESULT_LOST) {
        message = message + "lost";
    } else {
        message = message + "u had draw";
    }
    alert(message);
    gameRunning = false;
});



const demo = (a, ...number) => {

    const demo1 = (numbers) => {
        // if (isNaN(numbers)) {
        //     return 0;

        // } else {
        //     return numbers;
        // }
        return isNaN(numbers) ? 0 : numbers;
    }

    let sum = 0;
    for (let num of number) {
        sum += (num);

    }
    return demo1(sum);


};

console.log(demo(3, 5, 3, 4, 4));