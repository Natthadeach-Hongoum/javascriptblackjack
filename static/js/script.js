// Challenge 1 : You Age in Day
function ageInDay(){
    var birthYear = prompt('What year were you born... Good friend?');
    var ageInDayss = (2018-birthYear)*365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageInDayss + ' days');
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    document.getElementById('ageInDays').remove()
}

// Challenge 2 : Cat Generator
function generateCat(){
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = 'http://thecatapi.com/api/images/get?format=src&type=gif&size=small';
    div.appendChild(image);
}

// Challenge 3 : Rock,Paper,Scissors
function rpsGame(yourChoice){
    console.log(yourChoice)
    console.log(yourChoice.src)
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randomToRpsInt()); // Random Number
    console.log(botChoice)

    result = decideWinner(humanChoice,botChoice);//[0,1] human lost | bot Win [0.5,0.5]
    message = finalMessage(result);// {message :'You won!','color':'green'}
    rpsFrondEnd(yourChoice.id,botChoice,message);
}

function randomToRpsInt(){
    return Math.floor(Math.random()*3);
}

function numberToChoice(number){
    return ['rock','paper','scissors'][number]
}

function decideWinner(humanChoice,botChoice){
    var  rpsDatabase = {
        'rock':{'scissors':1,'rock':0.5,'paper':0},
        'scissors':{'paper':1,'scissors':0.5,'rock':0},
        'paper':{'rock':1,'paper':0.5,'scissors':0},
    }
    var yourScore = rpsDatabase[humanChoice][botChoice];
    var computerScore = rpsDatabase[botChoice][humanChoice];  
    
    return [yourScore,computerScore];
}

function finalMessage([yourScore,computerScore]){
    switch(yourScore){
        case 0:
            text = {'message':'You lost!','color':'red'};
            break;
        case 0.5:
            text = {'message':'You tied','color':'yellow'};
            break;    
        case 1:
            text = {'message':'You won!','color':'green'};
            break;
    }
    return text;
}

function rpsFrondEnd(humanChoice,botChoice,finalMessage){
    var imagesDatabase = {
        'rock':document.getElementById('rock').src,
        'scissors':document.getElementById('scissors').src,
        'paper':document.getElementById('paper').src,
    }
    // let's remove all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDic = document.createElement('div');

    humanDiv.innerHTML = "<img src='"+imagesDatabase[humanChoice]+"' height='150' width='150' style='box-shadow: 0px 10px 50px rgba(37,50,233,1);' alt>";
    botDiv.innerHTML = "<img src='"+imagesDatabase[botChoice]+"' height='150' width='150' style='box-shadow: 0px 10px 50px rgba(243,38,24,1);' alt >";
    console.log(finalMessage['color'])
    messageDic.innerHTML = "<h1 style='color:"+finalMessage['color']+";font-size:60px;padding:0px;'>"+finalMessage['message']+"</h1>";
    
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDic);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);

}

// Challenge 4: Change the Color of All Buttons
var all_buttons = document.getElementsByTagName('button');
var test_button = all_buttons;
var copyAllButton = [];
for(let i = 0 ; i<all_buttons.length;i++){
    copyAllButton.push(all_buttons[i].classList[1]);
}

function  buttonColorChange(buttonThingy){
    console.log(buttonThingy.value)
    if(buttonThingy.value ==='red'){
        buttonsRed();
    }else if(buttonThingy.value=='green'){
        buttonGreen();
    }else if(buttonThingy.value=='random'){
        buttunColorRandom();
    }else if(buttonThingy.value=='reset'){
        buttonColorReset();
    }
    console.log(test_button[1].classList[1]);
}

function buttonsRed(){
    for(let i = 0 ; i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttonGreen(){
    for(let i=0;i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function buttonColorReset(){
    for(let i=0;i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButton[i]);
    }
}

function buttunColorRandom(){
    let buttonData = {
        0:'btn-success',
        1:'btn-secondary',
        2:'btn-success',
        3:'btn-danger',
        4:'btn-warning',
        5:'btn-info',
        6:'btn-light',
        7:'btn-dark',
        8:'btn-link',
    }
    for(let i=0;i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(buttonData[randomToButtonInt()]);
    }

}

function randomToButtonInt(){
    return Math.floor(Math.random()*8);
}


// Challenge 5 : Blackjeck

let blackjeckGame = {
    'you': {'scoreSpan':'#your-blackjack-result','div':'#your-box','score':0},
    'dealer': {'scoreSpan':'#dealer-blackjack-result','div':'#dealer-box','score':0},
    'cards':['2','3','4','5','6','7','8','9','10','J','Q','K','A'],
    'cardsMap': {'2':2 ,'3':3, '4':4, '5':5, '6':6, '7':7, '8':8, '9':9, '10':10, 'J':10, 'Q':10 , 'K':10, 'A':[1,11] },
    'wins':0,
    'losses':0,
    'draws':0,
    'isStand':false,
    'turnsOver':false,
};

const YOU = blackjeckGame['you'];
const DEALER = blackjeckGame['dealer'];

const hitSound = new Audio('static/sounds/swish.m4a');
const winSound = new Audio('static/sounds/cash.mp3');
const lossSound = new Audio('static/sounds/aww.mp3');

document.querySelector('#blackjack-hit-button').addEventListener('click',blackjeckHit);
document.querySelector('#blackjack-stand-button').addEventListener('click',blackjeckStand);
document.querySelector('#blackjack-deal-button').addEventListener('click',blackjeckDeal);

document.querySelector('#blackjack-stand-button').disabled;
document.querySelector('#blackjack-deal-button').disabled;


function blackjeckHit(){
    console.log(blackjeckGame['isStand']);
    if(blackjeckGame['isStand'] === false){
        let card = randomBlackJackCards();
        updateScore(card,YOU);
        showScore(YOU);
        showCard(card,YOU);   
    }
}

function showCard(card,activePlayer){    
    if(activePlayer['score']<=21){
            let cardImage = document.createElement('img');
            cardImage.src = `static/images/${card}.png`;
            document.querySelector(activePlayer['div']).appendChild(cardImage);
            hitSound.play();
    }
}

function blackjeckStand(){
    dealerLogic();
}

function blackjeckDeal(){
    if(blackjeckGame['turnsOver'] === true){
        console.log()
        blackjeckGame['isStand'] = false;
        let yourImages = document.querySelector('#your-box').querySelectorAll('img');
        let dealerImage = document.querySelector('#dealer-box').querySelectorAll('img');
        
        for (let i = 0;i<yourImages.length;i++){
            yourImages[i].remove();
        }
        
        
        for(let i=0;i<dealerImage.length;i++){
            dealerImage[i].remove();
        }
    
        //reset score
        YOU['score']=0;
        DEALER['score']=0;
        document.querySelector(YOU['scoreSpan']).textContent = YOU['score'];
        document.querySelector(YOU['scoreSpan']).style.color = 'blue';
        document.querySelector(DEALER['scoreSpan']).textContent = YOU['score'];
        document.querySelector(DEALER['scoreSpan']).style.color = 'blue';
    
        document.querySelector('#blackjack-result').textContent = "Let's play";
        document.querySelector('#blackjack-result').style.color = "black";

        blackjeckGame['turnsOver'] = false;
   
    }
}

function randomBlackJackCards(){
   let randomIndex = Math.floor(Math.random()*13);
   return blackjeckGame['cards'][randomIndex];
}

function updateScore(card,activePlayer){
    if(activePlayer['score']<=21){   
        if(card == 'A'){
            // If adding 11 keeps me beloew 21 , add 11. Otherwise, add 1 
            if(activePlayer['score'] +   blackjeckGame['cardsMap'][card][1] <=21){
                activePlayer['score'] += blackjeckGame['cardsMap'][card][1];
            }else{
                activePlayer['score'] += blackjeckGame['cardsMap'][card][0];
            }
        }else{
            activePlayer['score'] += blackjeckGame['cardsMap'][card];
        }
    }else{

    }

}

function showScore(activePlayer){
    if(activePlayer['score']>21){
        document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST';
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
    }else{
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
    }
}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}

async function dealerLogic(){
    blackjeckGame['isStand'] = true;
    while(DEALER['score']<16 && blackjeckGame['isStand']===true){
        let card = randomBlackJackCards();
        showCard(card, DEALER);
        updateScore(card,DEALER);
        showScore(DEALER);
        await sleep(1000);
    }
    blackjeckGame['turnsOver'] = true;
    let winner = computeWinner();
    showResult(winner);
        
}

// computer winner and return who just won
// update the win ,draws,and losses
function  computeWinner(){
    let winner;
    if(YOU['score'] <=21){
        // condition : higher score than deaker or when dealer busts but you're  21 or under 
        if( (YOU['score'] >DEALER['score']) ||(DEALER['score'] > 21)){
            blackjeckGame['wins']++;
            winner =YOU;
        }else if(YOU['score']<DEALER['score']){
            blackjeckGame['losses']++;
            winner = DEALER;
        }else if(YOU['score']=DEALER['score']){
            blackjeckGame['draws']++;
        }
    // condition:when user busts but dealer dosen't    
    }else if(YOU['score'] > 21 && DEALER['score']<=21){
        blackjeckGame['losses']++;
        winner = DEALER;
    //condition: when you and dealer busts
    }else if(YOU['score']>21 && DEALER['score']>21){
        blackjeckGame['draws']++;
    }
    
    return winner;
}

function showResult(winner){
    let message,messageColor;
    if(blackjeckGame['turnsOver'] === true){
        if(winner === YOU){
            document.querySelector('#wins').textContent = blackjeckGame['wins'];
            message = 'You won!';
            messageColor = 'green';
            winSound.play();
        }else if (winner === DEALER){
            document.querySelector('#losses').textContent = blackjeckGame['losses']
            message = 'You lost!';
            messageColor = 'red';
            lossSound.play();
        }else{
            document.querySelector('#draws').textContent = blackjeckGame['draws']
            message = 'You drew';
            messageColor = 'black';
        }
        document.querySelector('#blackjack-result').textContent = message;
        document.querySelector('#blackjack-result').style.color = messageColor;
    
    }
}