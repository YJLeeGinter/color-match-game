var row = 4;
var col = 3;
var colorCandidate = ['red', 'red', 'orange', 'orange', 'green',
'green','yellow', 'yellow', 'white', 'white' ,'pink', 'pink' ];
var color = [];
var clickFlag = true;
var clickCount = 0;

for(var i =0;  colorCandidate.length >0; i +=1 ){
    color = color.concat(colorCandidate.splice(Math.floor(Math.random()*colorCandidate.length), 1));
}
console.log(color);
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
            if(clickFlag){
                c.classList.toggle('flipped');
                clickCount +=1;
            }
        });
      })(card);        
        document.body.appendChild(card);
    }  
    
    document.querySelectorAll('.card').forEach(function(card, index){
        setTimeout(function(){
            card.classList.add('flipped');
        }, 1000 + 100 *index);
    });

    setTimeout(function(){
        document.querySelectorAll('.card').forEach(function(card, index){
            card.classList.remove('flipped'); 
        });
        clickFlag = true;  
    }, 5000);
    
    
}

setupCards(row, col);