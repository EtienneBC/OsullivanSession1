// tableaux de données
const avis = [{
    id: 1,
    nom: "susan smith",
    travail: "Développeure web",
    texte: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    nom: "anna johnson",
    travail: "Concepteur de sites Web",
    texte: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enoml pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    nom: "peter jones",
    travail: "Interne",
    texte: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    nom: "bill anderson",
    travail: "PDG",
    texte: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

const nom = document.getElementById('auteur');
const travail = document.getElementById('job');
const texte = document.getElementById('info');
const btnSuivant = document.querySelector('.next-btn');
const btnPrecedent = document.querySelector('.prev-btn');
const btnRandom = document.querySelector('.btnRandom');
// set starting item
let currentItem = 0;
// load initial item
window.addEventListener('DOMContentLoaded', function () {
  showPerson(currentItem);
});
// show person based on item
function showPerson(person) {
  const item = avis[person];
  nom.textContent = item.nom;
  travail.textContent = item.travail;
  texte.textContent = item.texte;
}
// show next person
btnSuivant.addEventListener('click', function () {
  currentItem++;
  if (currentItem > avis.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show previous person
btnPrecedent.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = avis.length - 1;
  }
  showPerson(currentItem);
});



/*
Pour ce travail, vous devez réaliser un caroussel d'avis en utilisant le tableau de données ci-dessous.
Pour vous guider, vous aurez besoin d'utiliser ses fonctions:

getElementById (https://developer.mozilla.org/fr/docs/Web/API/Document/getElementById)
querySelector (https://developer.mozilla.org/fr/docs/Web/API/Document/querySelector)
addEventListener (https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener)

ainsi que des conditions (if) (https://developer.mozilla.org/fr/docs/Learn/JavaScript/Building_blocks/conditionals)
*/
