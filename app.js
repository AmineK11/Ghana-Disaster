// MENU BURGER

function toggleMenu () {  
  const navbar = document.querySelector('.navbar');
  const burger = document.querySelector('.burger');
  const liens = document.querySelectorAll('nav a');

  burger.addEventListener('click', (e) => {    
    navbar.classList.toggle('isOpen');
    burger.classList.toggle('isOpen');
  }); 
  liens.forEach((lien) => {
    lien.addEventListener('click', () => {
      navbar.classList.remove('isOpen');
      burger.classList.remove('isOpen');
    })
  }) 
}
toggleMenu();

// SLIDER

const items = document.querySelectorAll('.img-carousel');
const nbSlide = items.length;
const suivant = document.querySelector('.right');
const precedent = document.querySelector('.left');
let count = 0;

function slideSuivante(){
    items[count].classList.remove('active');

    if(count < nbSlide - 1){
        count++;
    } else {
        count = 0;
    }

    items[count].classList.add('active')
    console.log(count);
    
}
suivant.addEventListener('click', slideSuivante)


function slidePrecedente(){
    items[count].classList.remove('active');

    if(count > 0){
        count--;
    } else {
        count = nbSlide - 1;
    }

    items[count].classList.add('active')
    // console.log(count);
    
}
precedent.addEventListener('click', slidePrecedente)

function keyPress(e){
    console.log(e);
    
    if(e.keyCode === 37){
        slidePrecedente();
    } else if(e.keyCode === 39){
        slideSuivante();
    }
}
document.addEventListener('keydown', keyPress)