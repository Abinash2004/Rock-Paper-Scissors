let user_Score = 0;
let comp_Score = 0;

let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let info = document.querySelector("#info");

const generate = () => {
    let choice = ["Rock","Paper","Scissors"];
    return choice[Math.floor(Math.random() * 3)];
}

let comp_decision = "";
let userScore = document.querySelector("#user-score");
let compScore = document.querySelector("#comp-score");

rock.addEventListener("click",() => {
    comp_decision = generate();
    if( comp_decision == "Scissors") {
        info.innerText = "You Won";
        userScore.innerText = ++user_Score;
    } else if( comp_decision == "Paper") {
        info.innerText = "Comp Won";
        compScore.innerText = ++comp_Score;
    } else {
        info.innerText = "Draw";
        userScore.innerText = ++user_Score;
        compScore.innerText = ++comp_Score;
    }

})
paper.addEventListener("click",() => {
    comp_decision = generate();
    if( comp_decision == "Scissors") {
        info.innerText = "Comp Won";
        compScore.innerText = ++comp_Score;
    } else if( comp_decision == "Rock") {
        info.innerText = "You Won";
        userScore.innerText = ++user_Score;
    } else {
        info.innerText = "Draw";
        userScore.innerText = ++user_Score;
        compScore.innerText = ++comp_Score;
    }
})
scissors.addEventListener("click",() => {
    comp_decision = generate();
    if( comp_decision == "Rock") {
        info.innerText = "Comp Won";
        compScore.innerText = ++comp_Score;
    } else if( comp_decision == "Paper") {
        info.innerText = "You Won";
        userScore.innerText = ++user_Score;
    } else {
        info.innerText = "Draw";
        userScore.innerText = ++user_Score;
        compScore.innerText = ++comp_Score;
    }
})