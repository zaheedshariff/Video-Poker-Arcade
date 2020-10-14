/*----- constants -----*/

const cardImages = {
    Hearts2: 'card-deck-css\images\hearts\hearts-r02.svg',
    Hearts3: 'card-deck-css\images\hearts\hearts-r03.svg',
    Hearts4: 'card-deck-css\images\hearts\hearts-r04.svg',
    Hearts5: 'card-deck-css\images\hearts\hearts-r05.svg',
    Hearts6: 'card-deck-css\images\hearts\hearts-r06.svg',
    Hearts7: 'card-deck-css\images\hearts\hearts-r07.svg',
    Hearts8: 'card-deck-css\images\hearts\hearts-r08.svg',
    Hearts9:'card-deck-css\images\hearts\hearts-r09.svg',
    Hearts10:'card-deck-css\images\hearts\hearts-r10.svg',
    HeartsJack:'card-deck-css\images\hearts\hearts-J.svg',
    HeartsQueen:'card-deck-css\images\hearts\hearts-Q.svg',
    HeartsKing:'card-deck-css\images\hearts\hearts-K.svg',
    HeartsAce: 'card-deck-css\images\hearts\hearts-A.svg', 
    Diamonds2: 'card-deck-css\images\diamonds\diamonds-r02.svg',
    Diamonds3: 'card-deck-css\images\diamonds\diamonds-r03.svg',
    Diamonds4: 'card-deck-css\images\diamonds\diamonds-r04.svg',
    Diamonds5: 'card-deck-css\images\diamonds\diamonds-r05.svg',
    Diamonds6: 'card-deck-css\images\diamonds\diamonds-r06.svg',
    Diamonds7: 'card-deck-css\images\diamonds\diamonds-r07.svg',
    Diamonds8: 'card-deck-css\images\diamonds\diamonds-r08.svg',
    Diamonds9: 'card-deck-css\images\diamonds\diamonds-r09.svg',
    Diamonds10: 'card-deck-css\images\diamonds\diamonds-r10.svg',
    DiamondsJack: 'card-deck-css\images\diamonds\diamonds-J.svg',
    DiamondsQueen: 'card-deck-css\images\diamonds\diamonds-Q.svg',
    DiamondsKing: 'card-deck-css\images\diamonds\diamonds-K.svg',
    DiamondsAce: 'card-deck-css\images\diamonds\diamonds-A.svg',
    Clubs2: 'card-deck-css\images\clubs\clubs-r02.svg',
    Clubs3:'card-deck-css\images\clubs\clubs-r03.svg',
    Clubs4:'card-deck-css\images\clubs\clubs-r04.svg',
    Clubs5: 'card-deck-css\images\clubs\clubs-r05.svg',
    Clubs6:'card-deck-css\images\clubs\clubs-r06.svg',
    Clubs7:'card-deck-css\images\clubs\clubs-r07.svg',
    Clubs8:'card-deck-css\images\clubs\clubs-r08.svg',
    Clubs9:'card-deck-css\images\clubs\clubs-r09.svg',
    Clubs10:'card-deck-css\images\clubs\clubs-r10.svg',
    ClubsJack:'card-deck-css\images\clubs\clubs-J.svg',
    ClubsQueen:'card-deck-css\images\clubs\clubs-Q.svg',
    ClubsKing:'card-deck-css\images\clubs\clubs-K.svg',
    ClubsAce:'card-deck-css\images\clubs\clubs-A.svg',
    Spades2:'card-deck-css\images\spades\spades-r02.svg',
    Spades3:'card-deck-css\images\spades\spades-r03.svg',
    Spades4: 'card-deck-css\images\spades\spades-r04.svg',
    Spades5:'card-deck-css\images\spades\spades-r05.svg',
    Spades6: 'card-deck-css\images\spades\spades-r06.svg',
    Spades7:'card-deck-css\images\spades\spades-r07.svg',
    Spades8:'card-deck-css\images\spades\spades-r08.svg',
    Spades9:'card-deck-css\images\spades\spades-r09.svg',
    Spades10: 'card-deck-css\images\spades\spades-r10.svg',
    SpadesJack: 'card-deck-css\images\spades\spades-J.svg',
    SpadesQueen:'card-deck-css\images\spades\spades-Q.svg',
    SpadesKing:'card-deck-css\images\spades\spades-K.svg',
    SpadesAce:'card-deck-css\images\spades\spades-A.svg',   
}

// Game States:  
var gamestates = {     
}

// Credits
let startCredits = 100;  
let maxbet = 5; 
let minbet = 1;


/*----- app's state (variables) -----*/

var currentCredits = {
    credits: 100,
}

let firstCard, secondCard, thirdCard, fourthCard, fifthCard;




/*----- cached element references -----*/

var integer = 0;
let add = document.getElementById('increment');
let subtract = document.getElementById('decrement');
let currentBet = document.getElementById('currentbet');
let creditsLeft = document.getElementById('credits_left');
let max = document.getElementById('max_bet');
let dealButton = document.getElementById('dealbutton');
let cardsDeck = document.querySelectorAll('deck');

/*----- event listeners -----*/

//Betting button event listeners:
//increment, decrement the bet, max bet of 5
add.addEventListener('click', function(evt){
    integer += 1; 
    currentBet.value = integer;
})

subtract.addEventListener('click', function(evt){
    integer -= 1; 
    currentBet.value = integer;
})

max.addEventListener('click', function(evt){
    integer += 5;
    currentBet.value = integer;
})

// Bets will initialize with the deal button
dealButton.addEventListener('click', playGame);

/*----- functions -----*/

function playGame () {
    dealButton.classList.add('hidden');
    cardsDeck.classList.remove('hidden');
    createDeck();
    shuffleDeck();
   

}

// Create Deck Function
function createDeck () {
    var suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    var ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
    var deck = [];
  
    suits.forEach(function(s){
    ranks.forEach(function(r){
      deck.push(s+r)
    })
    return deck;
  });
}

// Shuffle Deck function
function shuffleDeck (deck) {
  for (var i=0; i < 52; i++){
    var shuffledCard = deck[i]
    var randomCardIndex = Math.floor(Math.random() * 52);
    deck[i] = deck[randomCardIndex]
    deck[randomCardIndex] = shuffledCard
  }
}

// Hands function





/*----- defunct code -----*/


// function createDeck () {
//     var suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
//     var ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
//     var deck = [];

//     for (var suitCounter = 0; suitCounter < 4; suitCounter++) {
//         for (var rankCounter = 0; rankCounter < 13; rankCounter++) {
//             deck.push(ranks[rankCounter] + suits[suitCounter])
//         }
//     }
//   return deck;
// }