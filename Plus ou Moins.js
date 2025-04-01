let button = document.querySelector("button");
let randomNumber;
let answer;
let numMin;
let numMax;

const minInput = () => {
  numMin = parseInt(prompt("Entrez le nombre minimum"));
  if (isNaN(numMin)) {
    alert("Veuillez entrer un nombre valide.");
    return minInput();
  }
  maxInput();
};

const maxInput = () => {
  numMax = parseInt(prompt("Entrez le nombre maximum"));
  if (isNaN(numMax) || numMax <= numMin) {
    alert("Veuillez entrer un nombre valide supérieur au minimum.");
    return maxInput();
  }
  startGame();
};

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const startGame = () => {
  randomNumber = getRandomNumber(numMin, numMax);
  console.log("Nombre aléatoire généré :", randomNumber);
  let numberOfTries = 1;
  let maxTries = 10;
  
  while (numberOfTries <= maxTries) {
    answer = parseInt(prompt(`Tentative ${numberOfTries}/${maxTries} - Devinez le nombre !`));
    
    if (isNaN(answer)) {
      alert("Ce n'est pas un nombre valide !");
      numberOfTries--
      console.log(answer);
      
    } else if (answer > randomNumber) {
      alert("C'est moins !");
    } else if (answer < randomNumber) {
      alert("C'est plus !");
    } else {
      alert(`Bravo ! Tu as trouvé en ${numberOfTries} tentatives`);
      if (confirm("Rejouer ?")) {
        minInput();
      } else {
        alert("Merci d'avoir joué !");
      }
      return;
    }
    
    numberOfTries++;
    if (numberOfTries > maxTries) {
      alert(`Vous avez atteint la limite de ${maxTries} tentatives. Le nombre était ${randomNumber}.`);
      if (confirm("Rejouer ?")) {
        minInput();
      } else {
        alert("Merci d'avoir joué !");
      }
      return;
    }
  }
};

button.addEventListener("click", minInput);

