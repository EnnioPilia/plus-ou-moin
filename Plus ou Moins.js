let button = document.querySelector("button");

let randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);

const plusMoins = () => {
  let numberOfTries = 1;
  console.log("Tries :", numberOfTries);
  
  let answer = parseInt(prompt("Plus ou moins, devinez le nombre !"));

  while (answer !== randomNumber) {
   console.log("Tries :", numberOfTries++);

    if (answer > randomNumber) {
      alert("C'est moins !");
      answer = parseInt(prompt("Essaie encore ! Devine le nombre :"));
      console.log(answer);
    } else if(answer < randomNumber) {
      alert("C'est plus !");
      answer = parseInt(prompt("Essaie encore ! Devine le nombre :"));
      console.log(answer);
    } else {
      alert("Ce n'est pas un nombre valide !");
      answer = parseInt(prompt("Essaie encore ! Devine le nombre :"));
      console.log(answer);
    }
    
    if (answer === randomNumber) {
      alert(`Bravo ! Tu as trouvé en ${numberOfTries} tentatives`);
      let replay = confirm("Rejouer ?" )
      console.log(replay);
      if (replay === true){
         plusMoins()
      }
      console.log(answer);
      
    } 
  
  }
};



button.addEventListener("click", plusMoins);