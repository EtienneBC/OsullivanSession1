const diapositives = document.querySelectorAll('.slide');
const btnSuivant = document.querySelector('.btnSuivant');
const btnPrecedent = document.querySelector('.btnPrecedent');

diapositives.forEach(function (diapositive, index) {
    diapositive.style.left = `${index *100}%`;
});
let compteur = 0;
btnSuivant.addEventListener('click', function () {
    compteur++;
    carousel();
})
btnPrecedent.addEventListener('click', function () {
    compteur--;
    carousel();
})

function carousel() {
    if(compteur < diapositives.length -1) {
        btnSuivant.style.display = 'block';
    } else {
        btnSuivant.style.display = 'none';
    }

    if(compteur > 0) {
        btnPrecedent.style.display = 'block';
    } else {
        btnPrecedent.style.display = 'none';
    }

    diapositives.forEach(function(diapositive) {
        diapositive.style.transform = `translateX(-${compteur * 100}%)`;
    });
}
btnPrecedent.style.display = 'none';