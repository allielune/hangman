(function(){
"use strict";

var answerArray = [];
var p1;
var p2;
var word;
var spaces;
var spacesArray=[];
var gallowsCounter=0;

console.log("Hello World");
//click Let's Play to reveal firstStep div
function startGame() {
	    document.getElementById("firstStep").style.visibility = "visible";
}
//upon entry of player names, function next will store player names as p1 and p2 for use later in high score tracking
//next() will also reveal the playerone div that asks for the player to enter a secret word


function next() {
    var playerOne = document.getElementById("player1Name").value = "block";
    document.getElementById("player1Name").innerHTML = p1;
	
	var playerTwo = document.getElementById("player2Name").value = "block";
    document.getElementById("player2Name").innerHTML = p2;
	
	document.getElementById("playerone").style.display = "block";
}

//upon entry of the secret word js stores the entry into variable "secretWord"
//secretWord is then parsed into the answerArray 
//answerArray is displayed in the gameArea as lines

function createWord() {
	console.log("createWord", word);
	word = document.getElementById("secretWord").value;
	word = word.toUpperCase();
    document.getElementById("displayClue").innerHTML = word;
	answerArray=word.split();
	createSpaces();
}

function createSpaces(){
	for (var i=0; i < word.length;i++){
		spacesArray[i]="_";
	}
	updateClue();
}
function guess(value){
	var gallows = true;
	for (var i=0; i < word.length;i++){
		if (answerArray[i]===value){
			spacesArray[i]=value;
			gallows = false;
		}
	}
	if (gallows){
		updateGallows();
	}else{
		updateClue();
	}
}

function updateGallows(){
	gallowsCounter++;
	document.getElementById("gallowPic").src="Hangman"+ gallowsCounter +".jpg";
	if (gallowsCounter >=7){
		youLose();
	}
}

function updateClue(){
	spaces = spacesArray.join(" ");
	document.ElementById("spaces").innerHTML = spaces;
}

function youLose(){
	alert("You Lose Loser!");
}
//the playertwo area is also revealed after the secretWord is entered

//Player two can select a button for a letter guess
//the letter guess is compared to the array
//if the letterGuess matches an element in the Array, the matched letter is revealed, the guess is counted as a matchedGuess, a point is added to the accumulating playerTwo score
//if the matchedGuess total = number of unique letters in the array, a message that Player Two wins and a request if another round should be played
//if the letterGuess does not match anything in the array, the guess is counted in missedGuesses and the image is changed in the gallows
//if the missedGuesses = 7 (total of eight guesses) then a message that Player One Wins and request if another round should be played

//if another round is to be played, the prompt that Player Two should enter a secret word (replace the Player One as Player Two in playerone div and Player One should replace Player Two in playertwo div.

 })();