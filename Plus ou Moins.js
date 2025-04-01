let button = document.querySelector("button");
let randomNumber 
let answer 

const getRandomNumber = () =>{
   randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);
}
   
const startGame = () => {
   getRandomNumber()
   
   //Déclaration des tentatives
  let numberOfTries = 1;
  console.log("Tries :", numberOfTries);
  
  //Déclaration du prompt
  answer = parseInt(prompt("Plus ou moins, devinez le nombre !"));

   //Condition tant que le nbre est pas trouvé
   while (answer !== randomNumber) {
      console.log("Tries :", numberOfTries++);

         //Vérif si le prompt est trop élevé ou bas
    if (answer > randomNumber) {
      alert("C'est moins !");
      
    } else if (answer < randomNumber) {
      alert("C'est plus !");
      
     } else if (isNaN(answer)){
      alert("Ce n'est pas un caractère valide !");
    } 
    answer = parseInt(prompt("Essaie encore ! Devine le nombre :"));
    
   }

   //Vérif si nbre trouvé
    if (answer === randomNumber) {
      alert(`Bravo ! La réponse était ${randomNumber}. Tu as trouvé en ${numberOfTries} tentatives`);
      let replay = confirm("Souhaites-tu rejouer ?" )
      if (replay === true){
         startGame()
      } else {
         return alert("Merci d'avoir joué !")
      }
    } 

    //Vérif si plus de 10 tentatives
    if (numberOfTries > 10){
      alert(`Vous n'avez plus de tentatives ! Dommage le nombre mystère était ${randomNumber}`) 
      let replay = confirm("Souhaites-tu rejouer ?" )
    if (replay === true){
       startGame()
    } else {
      return alert("Merci d'avoir joué !")
   }
    }

  }


button.addEventListener("click", startGame);
