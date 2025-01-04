/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

// Sélectionner tous les boutons et toutes les sections de contenu
const profileOptions = document.querySelectorAll('.profil-option');
const contentSections = document.querySelectorAll('.presentation, .parcours, .projets, .experiences');

// Ajouter un écouteur d'événements à chaque bouton
profileOptions.forEach(option => {
  option.addEventListener('click', () => {
    // Réinitialiser toutes les sections : les cacher
    contentSections.forEach(section => {
      section.style.display = 'none';
    });

    // Réinitialiser toutes les options : enlever la classe active
    profileOptions.forEach(opt => opt.classList.remove('active'));

    // Ajouter la classe active au bouton cliqué
    option.classList.add('active');

    // Afficher la section correspondante en fonction de l'ID du bouton
    const sectionToShow = document.querySelector(`.${option.id.split('-')[1]}`);
    if (sectionToShow) {
      sectionToShow.style.display = 'block';
    }
  });
});
