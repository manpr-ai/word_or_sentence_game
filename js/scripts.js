// Sélection des éléments HTML nécessaires
const gameSelection = document.getElementById("gameSelection");
const gameSelector = document.getElementById("gameSelector");
const startGameButton = document.getElementById("startGameButton");
const game = document.getElementById("game");
const inputGameList = document.getElementById("inputGameList");
const validateButton = document.getElementById("validateButton");
const resultList = document.getElementById("result");
const indexList = document.getElementById("indexList");
const restartButton = document.getElementById("restartButton");

// Listes de mots et de phrases
const listWords = ["Pomme", "Éléphant", "Table"];
const listSentences = [
  "Les chats ronronnent",
  "La pluie tombe",
  "Les oiseaux chantent",
  "Mon chien est trop beau",
];

// Variables pour suivre l'état du jeu
let currentList = []; // Liste actuelle
let currentIndex = 0; // Index de l'élément actuel dans la liste
let scores = 0; // Score du joueur

// Fonction pour démarrer le jeu
const startGame = () => {
  // Récupérer la valeur sélectionnée dans la liste déroulante
  const selectedGame = gameSelector.value;

  // Masquer la section de sélection du jeu
  gameSelection.style.display = "none";

  // Afficher la section du jeu
  game.style.display = "block";

  // Sélectionner la liste appropriée en fonction du choix de l'utilisateur
  if (selectedGame === "1") {
    currentList = listWords;
  } else if (selectedGame === "2") {
    currentList = listSentences;
  } else {
    console.error("Erreur : Jeu non valide");
    return;
  }

  // Afficher le premier élément de la liste
  displayNextItem();
};

// Fonction pour afficher le prochain élément de la liste
const displayNextItem = () => {
  // Effacer le résultat précédent
  resultList.textContent = "";

  // Vérifier s'il reste des éléments dans la liste
  if (currentIndex < currentList.length) {
    // Sélectionner l'élément actuel
    const currentItem = currentList[currentIndex];

    // Afficher l'élément actuel dans l'élément indexList
    indexList.textContent = currentItem;

    // Passer à l'élément suivant dans la liste
    currentIndex++;
  } else {
    // Afficher le résultat final lorsque tous les éléments de la liste ont été traités
    resultList.textContent = `Votre score est de ${scores} sur ${currentList.length}`;

    // Masquer le bouton "Validez !" et afficher le bouton "Rejouer !"
    validateButton.style.display = "none";
    restartButton.style.display = "inline-block";
  }
};

// Fonction pour valider l'entrée de l'utilisateur
const validateInput = () => {
  // Récupérer l'entrée de l'utilisateur et supprimer les espaces avant et après
  const userInput = inputGameList.value.trim();

  // Récupérer l'élément actuel de la liste
  const currentItem = currentList[currentIndex - 1];

  // Vérifier si l'entrée de l'utilisateur correspond à l'élément actuel de la liste (ignorer la casse)
  if (userInput.toLowerCase() === currentItem.toLowerCase()) {
    // Incrémenter le score si la réponse est correcte
    scores++;
  }
  // Réinitialiser la valeur de l'input à une chaîne vide
  inputGameList.value = "";

  // Afficher le prochain élément de la liste
  displayNextItem();
};

// Écouteur d'événement pour le bouton "Commencer le jeu"
startGameButton.addEventListener("click", startGame);

// Écouteur d'événement pour le bouton "Validez !"
validateButton.addEventListener("click", validateInput);

// Écouteur d'événement pour le bouton "Rejouer !"
restartButton.addEventListener("click", () => {
  // Rafraîchit la page pour redémarrer le jeu
  location.reload();
});
