// initialiser la variable conteur a 0
let compteur = 0;
// definir constente pour viser boutons
const valeur = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn) {
    // btns = {bouton1,bouton2,bouton3}
    // btn = bouton1
    // btn = bouton2
    // btn = bouton3
    btn.addEventListener("click", function (e){
        const styles = e.currentTarget.classList;
        //console.log(styles);
        if(styles.contains("decrease")){
            compteur--;
        } else if(styles.contains("increase")){
            compteur++;
        } else {
            compteur = 0;
        }
            if (compteur > 0) {
                valeur.style.color = "green";
            }
            if (compteur < 0) {
                valeur.style.color = "red";
            }
            if (compteur === 0){
                valeur.style.color = "#222"
            }
        valeur.textContent = compteur;
    })    
})
