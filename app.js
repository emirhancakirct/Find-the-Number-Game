let guess = document.getElementById("number");
let check = document.getElementById("check");
let attempts10 = document.getElementById("attempts10");
let playAgain = document.getElementById("playAgain");
let attempts = document.getElementById("attempts-container");
let writeNumber = document.getElementById("p2");
let nOfAttempts = document.getElementById("attempts");
let luckyNum = Math.floor(Math.random() * 100 + 1);
let numbers = [0,100]
let x;


check.addEventListener("click", () => {

if (guess.value == luckyNum){
    p2.style.fontSize="2rem";
    p2.innerText = `Congratulations, you found the random number ${luckyNum} on your ${11-Number(attempts10.innerText)}. attempts`
    attempts.style.display = "none";
    playAgain.style.display = "block";
    guess.value=""
}
else if (guess.value>luckyNum){
    p2.style.fontSize="2rem";
    numbers.push(guess.value);
    numbers.sort(function(a,b){return a-b});
    x = numbers.indexOf(guess.value);
    p2.innerText = `Please enter a smaller number`
    attempts10.innerText=Number(attempts10.innerText)-1
    if(attempts10.innerText==0){
        p2.innerText=`Sorry, you failed. The number was ${luckyNum}`;
        attempts.style.display="none";
        playAgain.style.display="block";
        guess.value=""
        
    }
}
else if(guess.value<luckyNum){
p2.style.fontSize="2rem";
numbers.push(guess.value);
numbers.sort(function(a,b){return a-b});
x = numbers.indexOf(guess.value);
p2.innerText=`Please enter a greater number`
attempts10.innerText=Number(attempts10.innerText)-1
if(attempts10.innerText==0){
    p2.innerText=`Sorry, you failed. The number was ${luckyNum}`
    attempts.style.display="none";
    playAgain.style.display="block";
    guess.value=""
}
}
})

playAgain.addEventListener("click", ()=>{
    location.reload();
    })

  