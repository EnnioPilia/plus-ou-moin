let randomNumber = Math.random() * 100;
randomNumber = Math.floor(randomNumber);
console.log(randomNumber);

let answer = parseInt(prompt("More or less, guess the number !")); // Convertir la réponse en entier

const plusMoins = () =>{
   if (answer > randomNumber){
    alert("C'est moins !")
   } else if (answer < randomNumber){
    alert("C'est plus !")
   } else {
    alert("correct")
   }
}


while (answer !== randomNumber) {
    plusMoins(); // Appeler la fonction pour afficher l'indice
    answer = parseInt(prompt("Essaie encore ! Devine le nombre :")); // Demander à nouveau une réponse
 }

