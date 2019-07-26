var row = 4;
var col = 3;
var realColor = ['red', 'red', 'orange', 'orange', 'green',
'green','yellow', 'yellow', 'white', 'white' ,'pink', 'pink' ];
var colorCandidate = realColor.slice();
var color = [];
var clickFlag = true;
var clickedCard = [];
var correctCards = [];
var startTime;

function shuffle(){
    for(var i =0;  colorCandidate.length >0; i +=1 ){
        color = color.concat(colorCandidate.splice(Math.floor(Math.random()*colorCandidate.length), 1));
    }
}

function setupCards(row, col){
    clickFlag = false;

    for(var i = 0; i < row*col; i +=1){
        var card = document.createElement('div');
        card.className = 'card';
        var cardInner = document.createElement('div');
        cardInner.className = 'card-inner';
        var cardFront = document.createElement('div');
        cardFront.className = 'card-front';
        var cardBack = document.createElement('div');
        cardBack.className = 'card-back';
        cardBack.style.backgroundColor = color[i];
        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);
        card.appendChild(cardInner);
         (function (c){ // because of closure!
            card.addEventListener('click', function(){
             if(clickFlag && !correctCards.includes(c)){
                c.classList.toggle('flipped');
                clickedCard.push(c);

                if(clickedCard.length ===2 ){

                   if(clickedCard[0].querySelector('.card-back').style.backgroundColor === 
                   clickedCard[1].querySelector('.card-back').style.backgroundColor  ){
                    correctCards.push(clickedCard[0]);
                    correctCards.push(clickedCard[1]);
                    clickedCard = [];  

                    if(correctCards.length === 12){
                        var endTime = new Date();                        
                        alert('Congrats! ' + (endTime - startTime)/1000 + '초 걸렸습니다.' );
                        document.querySelector('#wrapper  ').innerHTML = '';
                        colorCandidate = realColor.slice();
                        correctCards = [];
                        color = [];
                        startTime = null; 
                        shuffle();
                        setupCards(row,col);
                    }

                   } else { // when the color of two cards are different!
                        clickFlag = false;
                    setTimeout(function(){
                        clickedCard[0].classList.remove('flipped');
                        clickedCard[1].classList.remove('flipped');
                        clickFlag = true;
                        clickedCard = [];  
                    }, 1000);
                   }      
                 }
            }
        });
      })(card);   

        document.querySelector('#wrapper').appendChild(card);
    }  
    
    document.querySelectorAll('.card').forEach(function(card, index){
        setTimeout(function(){
            card.classList.add('flipped');
        }, 1000 + 100 *index);
    });

    setTimeout(function(){
        document.querySelectorAll('.card').forEach(function(card, index){
            card.classList.remove('flipped'); 
        }); }, 5000);

    clickFlag = true;  
    startTime = new Date();
    
}
shuffle();  
setupCards(row, col);