const cards = document.querySelectorAll('.card');
let hasflippedCard = false;
let firstCard, secondCard;
let lockBoard = false;

function flipCard(){
    if(lockBoard)return;
    if(this === firstCard) return;
    this.classList.add('flip');
    if(!hasflippedCard){
        hasflippedCard = true;
        firstCard = this;
        return;
    }
    secondCard = this;
    hasflippedCard = false
    checkCards();
}

function checkCards(){
    if(firstCard.dataset.card === secondCard.dataset.card){
        disableCards();
        return;
    }

    unflipCard();
}

function disableCards(){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetboard();
}

function unflipCard(){
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetboard();
    }, 1500);
}

function resetboard(){
    [hasflippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [ null, null];

   

}

(function shuffle(){
    cards.forEach((card) => {
        let randomPosition = Math.floor(Math.random() *12);
        card.style.order = randomPosition;
    })
})();

cards.forEach((card) => {
    card.addEventListener('click', flipCard)

    
    
})