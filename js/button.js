// Création d'un élément bouton pour retourner à la page d'accueil sur appareils mobiles
let elButtonRetourPagePrincipale = document.createElement("button");
elButtonRetourPagePrincipale.innerHTML = "Page d'accueil";
elButtonRetourPagePrincipale.classList.add("elButtonRetourPagePrincipale");

document.body.appendChild(elButtonRetourPagePrincipale);
elButtonRetourPagePrincipale.addEventListener("click", function (e) {
  window.location = "index.html";
});
