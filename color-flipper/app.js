const couleurs = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector('.color');

//ajouter un gestionnaire devenement
btn.addEventListener("click", function () {
    const nbrAleatoire = getNbrAleatoire();

    document.body.style.backgroundColor = couleurs[nbrAleatoire];
    color.textContent = couleurs[nbrAleatoire];
})

function getNbrAleatoire() {
    return Math.floor(Math.random() * couleurs.length);
}