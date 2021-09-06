/* game logic based on yt whatsdev Tenzin */
/* accessible button to show and hide game instructions */
const btn_open_menu = document.getElementById("btn-open-menu");
const hidden = document.getElementById("hidden");

function openMenu(){
    hidden.classList.toggle("hidden");
    /* toggles aria-pressed state */
    let pressed = (btn_open_menu.getAttribute("aria-pressed") === "true");
    btn_open_menu.setAttribute("aria-pressed", !pressed);
}
/*"caching the DOM": creating variables for every DOM-element */
const scoreboard_div = document.getElementById("scoreboard");
let userScore = 0;
const userScore_p = document.getElementById("userScore");
let compScore = 0;
const compScore_p =document.getElementById("compScore");
const schere_btn = document.getElementById("schere");
const stein_btn = document.getElementById("stein");
const papier_btn = document.getElementById("papier");
const result_div = document.getElementById("result");

/*random number chooses element from array==computerChoice */
function compChoice(){
    const choices = ["S", "R", "P"];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

/*eventlisteners listen for clicks==userChoice */
function main() {
    schere_btn.addEventListener("click",function() {
        game("s");
    });
    stein_btn.addEventListener("click",function() {
        game("r");
    });
    papier_btn.addEventListener("click",function() {
        game("p");
    });
}
main();
/*show choices */
function letter(letter){ //convert Choices in human-readable
    if(letter == "r" || letter == "R") return "Stein";
    if(letter == "p" || letter == "P") return "Papier";
    return "Schere";
};

function win(user, computer){
    userScore++;
    result_div.innerHTML = `${letter(user)} besiegt ${letter(computer)}. Du hast gewonnen!`
    userScore_p.innerHTML = "Spieler " + userScore;
};

function lose(user, computer){
    compScore++;
    result_div.innerHTML = `${letter(user)} unterliegt ${letter(computer)}. Du hast verloren!`
    compScore_p.innerHTML = "Computer " + compScore;
};

function draw(user, computer){
    result_div.innerHTML = `${letter(user)} und ${letter(computer)}. Unentschieden!`
};
/*decision win, lose, draw*/
function game(userChoice){
    const computerChoice = compChoice();
    console.log(userChoice + computerChoice);
    switch (userChoice + computerChoice){
        case "sP":
        case "rS":  
        case "pR": 
        console.log("WIN!");
        win(userChoice, computerChoice);
        break;
        case "sR":
        case "rP":  
        case "pS": 
        console.log("LOST!");
        lose(userChoice, computerChoice);
        break;
        case "sS":
        case "rR":  
        case "pP": 
        console.log("DRAW!");
        draw(userChoice, computerChoice);
        break;
    }
    compHighlight(computerChoice);
}

/* highlight compChoice */
function compHighlight(computerChoice){
    switch (computerChoice){
        case "S":
            schere_btn.classList.add("compChoice");
            stein_btn.classList.remove("compChoice");
            papier_btn.classList.remove("compChoice");
            break;
        case "R":
            stein_btn.classList.add("compChoice");
            schere_btn.classList.remove("compChoice");
            papier_btn.classList.remove("compChoice");
            break;
        case "P":
            papier_btn.classList.add("compChoice");
            stein_btn.classList.remove("compChoice");
            schere_btn.classList.remove("compChoice");
            break;
    }
}