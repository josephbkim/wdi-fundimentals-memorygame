console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	console.log("You found a match!");
	} else {
	console.log("Sorry, try again.");
	}
};


var flipCard = function (cardId) {
	console.log ("User flipped " + cardId + ".");
	cardsInPlay.push(cards[cardId]);
};

flipCard(cards[0]);
flipCard(cards[1]);
checkForMatch();