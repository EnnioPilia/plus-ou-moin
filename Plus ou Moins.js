let button = document.querySelector("button");
let randomNumber 
let answer 

const getRandomNumber = () =>{
   randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);
}
   
const plusMoins = () => {
   getRandomNumber()
   
  let numberOfTries = 1;
  console.log("Tries :", numberOfTries);
  
  answer = parseInt(prompt("Plus ou moins, devinez le nombre !"));

  while (answer !== randomNumber) {
   console.log("Tries :", numberOfTries++);

    if (answer > randomNumber) {
      alert("C'est moins !");
      answer = parseInt(prompt("Essaie encore ! Devine le nombre :"));
    } else if(answer < randomNumber) {
      alert("C'est plus !");
      answer = parseInt(prompt("Essaie encore ! Devine le nombre :"));
    } else {
      alert("Ce n'est pas un nombre valide !");
      answer = parseInt(prompt("Essaie encore ! Devine le nombre :"));
    }
    
    if (answer === randomNumber) {
      alert(`Bravo ! Tu as trouvé en ${numberOfTries} tentatives`);
      let replay = confirm("Rejouer ?" )
      if (replay === true){
         plusMoins()
      } else {
         alert("Merci d'avoir joué !")
      }
    } 
  }
};

button.addEventListener("click", plusMoins);