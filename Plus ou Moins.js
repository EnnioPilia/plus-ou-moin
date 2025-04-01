let button = document.querySelector("button");

let randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);

const plusMoins = () => {
  let numberOfTries = 1;
  let answer = parseInt(prompt("Plus ou moins, devinez le nombre !"));

  while (answer !== randomNumber) {
    console.log("Tries :", numberOfTries++);

    if (answer > randomNumber) {
      alert("C'est moins !");
      answer = parseInt(prompt("Essaie encore ! Devine le nombre :"));
    } else  {
      alert("C'est plus !");
      answer = parseInt(prompt("Essaie encore ! Devine le nombre :"));
    } 
    
    if (answer === randomNumber) {
      alert(`Bravo ! Tu as trouvé en ${numberOfTries} tentatives`);
    }
  }
};

button.addEventListener("click", plusMoins);
