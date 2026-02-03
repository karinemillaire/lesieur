const btPlus = document.querySelector('.js-plus');
const conteneur = document.querySelector('.conteneur-transport');

btPlus.addEventListener('click',fouvreferme);


function fouvreferme(){
    conteneur.classList.toggle('conteneur-transport-invisible');
};