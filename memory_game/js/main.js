console.log("Up and running!");
//An array that contains objects
var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "image/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardIamge: "images/king-of-diamonds.png"
}
];

var cardsInPlay = [];

// function to check for a match and responds with correct message
var checkForMatch = function () {
	if (cardsInPlay[0].rank === cardsInPlay[1].rank) {
	alert("You found a match!");
	} else {
	alert("Sorry, try again.");
	}
};


var flipCard = function (cardId) {
	console.log("User flipped " + cards[cardId].rank + ".");
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
};

flipCard(0);
flipCard(1);
checkForMatch();