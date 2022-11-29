const cards = document.querySelectorAll('.card');
let hasflippedCard = false;
let firstCard, secondCard;

function flipCard(){
    this.classList.add('flip');
    if(!hasflippedCard){
        hasflippedCard = true;
        firstCard = this;
        return;
    }
    secondCard = this;
    checkCards();
}

cards.forEach((card) => {
    card.addEventListener('click', flipCard)
    
})