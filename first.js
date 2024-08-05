let icons = document.querySelector(".icons");
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let decision = document.querySelector("#decisionBox");
let youScore = document.querySelector("#youScore");
let compScore = document.querySelector("#compScore");
let restart = document.querySelector("button");
let user = 0;
let comp = 0;
function compRandom(){
    let compVal = Math.floor(Math.random()*3)+1;
    return compVal;
}

// rock-1  paper-2  scissor-3
rock.addEventListener("click",function(){
    console.log(this);
    rock.classList.add("pressed");
    setTimeout(() => {
        rock.classList.remove("pressed");  
    }, 100);
    let userVal = 1;
    let compVal = compRandom();
    console.log(compVal);
    if(compVal==userVal){
        decision.textContent = "It's a Draw!";
        decision.style.backgroundColor="#4F1787";
        decision.style.color="white";
    }
    else if(compVal==2){
        comp++;
        let score = comp;
        compScore.textContent = score;
        decision.textContent = "Paper beats Rock! You lose!";    
        decision.style.backgroundColor="#FAA0A0";
        decision.style.color="black";
    }
    else{
        user++;
        let score = user;
        youScore.textContent = score;
        decision.textContent = "Rock beats Scissor! You win!";
        decision.style.backgroundColor="#C1E1C1";
        decision.style.color="black"; 
    }

})
paper.addEventListener("click",function(){
    console.log(this);
    paper.classList.add("pressed");
    setTimeout(() => {
        paper.classList.remove("pressed");  
    }, 100);
    let userVal = 2;
    let compVal = compRandom();
    console.log(compVal);
    if(compVal==userVal){
        decision.textContent = "It's a Draw!";
        decision.style.backgroundColor="#4F1787";
        decision.style.color="white";
    }
    else if(compVal==1){
        user++
        let score = user;
        youScore.textContent = score;
        decision.textContent = "Paper beats Rock! You win!";  
        decision.style.backgroundColor="#C1E1C1";  
        decision.style.color="black";
    }
    else{
        comp++;
        let score = comp;
        compScore.textContent = score;
        decision.textContent = "Scissor beats Paper! You lose!";
        decision.style.backgroundColor="#FAA0A0";
        decision.style.color="black";
    }
})
scissors.addEventListener("click",function(){
    console.log(this);
    scissors.classList.add("pressed");
    setTimeout(() => {
        scissors.classList.remove("pressed");  
    }, 100);
    let userVal = 3;
    let compVal = compRandom();
    console.log(compVal);
    if(compVal==userVal){
        decision.textContent = "It's a Draw!";
        decision.style.backgroundColor="#4F1787";
        decision.style.color="white";
    }
    else if(compVal==2){
        user++;
        let score = user;
        youScore.textContent = score;
        decision.textContent = "Scissor beats Paper! You win!";
        decision.style.backgroundColor="#C1E1C1";
        decision.style.color="black";
    }
    else{
        comp++;
        let score = comp;
        compScore.textContent = score;
        decision.textContent = "Rock beats Scissor! You lose!";
        decision.style.backgroundColor="#FAA0A0";
        decision.style.color="black";
    }
})
// Restart button
restart.addEventListener("click",function(){
    comp = 0;
    user = 0;
    youScore.textContent="0";
    compScore.textContent="0";
    decision.textContent = "Choose your move!";
    decision.style.backgroundColor="#4F1787";
    decision.style.color="white"; 
});