// Importation de la fonction prompt depuis le fichier prompt.js
import { prompt } from "./prompt.js";

// Affichage des instructions pour l'utilisateur
console.log(`Choisissez une liste  :
1. Mots
2. Phrase
`);

// Fonction pour demander à l'utilisateur d'entrer un nombre
const promptNumber = (message) => {
  // Invite l'utilisateur à entrer un nombre en affichant un message
  const number = Number(prompt(message));
  // Valide le nombre entré
  return number;
};

// Fonction pour demander à l'utilisateur d'entrer un opérateur
const promptList = () => {
  // Invite l'utilisateur à entrer un opérateur
  const operator = promptNumber("Entrez l'opérateur : ");

  // Vérifie si l'opérateur entré est valide
  if (operator !== 1 && operator !== 2) {
    console.log("Opérateur invalide (1 ou 2)");
    // Si l'opérateur est invalide, invite à nouveau l'utilisateur à entrer un opérateur valide
    return promptList();
  }
  return operator;
};

// Obtention du choix de l'opérateur par l'utilisateur
const operator = promptList();

// Listes de mots et de phrases
const listWords = ["Pomme", "Éléphant", "Table"];
const listSentence = [
  "Les chats ronronnent",
  "La pluie tombe",
  "Les oiseaux chantent",
  "Mon chien est trop beau",
];
let scores = 0;

// Fonction pour jouer au jeu avec la liste sélectionnée
const playWithList = () => {
  // Parcours de la liste de mots
  if (operator === 1) {
    for (const word of listWords) {
      // Invite l'utilisateur à taper le mot
      let userWord = prompt("Tapez le mot : " + word + " / ");
      // Vérifie si le mot saisi correspond au mot actuel dans la liste
      if (userWord === word) {
        // Incrémente le score si le mot est correct
        scores++;
      }
    }
  } else {
    for (const sentence of listSentence) {
      // Invite l'utilisateur à taper la phrase
      let userSentence = prompt("Tapez la phrase : " + sentence + " / ");
      // Vérifie si la phrase saisie correspond à la phrase actuelle dans la liste
      if (userSentence === sentence) {
        // Incrémente le score si la phrase est correcte
        scores++;
      }
    }
  }

  // Affichage du score de l'utilisateur en fonction de la longueur de la liste sélectionnée
  // Utilisation de l'opérateur ternaire pour sélectionner la longueur de la liste appropriée
  // Si l'opérateur est égal à 1, affiche la longueur de listWords, sinon affiche la longueur de listSentence
  console.log(
    "Votre score est de " +
      scores +
      " sur " +
      (operator === 1 ? listWords.length : listSentence.length)
  );
};

playWithList();
