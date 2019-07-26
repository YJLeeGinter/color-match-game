var row = 4;
var col = 3;

function setupCards(row, col){

    for(var i = 0; i < row*col; i +=1){
        var card = document.createElement('div');
        card.className = 'card';
        var cardInner = document.createElement('div');
        cardInner.className = 'card-inner';
        var cardFront = document.createElement('div');
        cardFront.className = 'card-front';
        var cardBack = document.createElement('div');
        cardBack.className = 'card-back';
        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);
        card.appendChild(cardInner);
        card.addEventListener('click', function(){
            card.classList.toggle('flipped');
        })
        document.body.appendChild(card);
    }    
}

setupCards(row, col);