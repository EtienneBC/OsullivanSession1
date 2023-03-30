const apropos = document.querySelector('.onglets');
const btns = document.querySelectorAll('.onglet-btn');
const articles = document.querySelectorAll('.content');

apropos.addEventListener('click', function(e) {
    const id = e.target.dataset.id;
    if (id) {
        btns.forEach(function (btn) {
            btn.classList.remove('active');
        });
        e.target.classList.add('active');

        articles.forEach(function (articles) {
            articles.classList.remove('active');
        });
        const element = document.getElementById(id)
        element.classList.add('active');
    }
});
