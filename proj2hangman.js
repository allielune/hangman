var answerArray = [],
	spacesArray = [],
	gallowsCounter = 0,
	firstStep = document.getElementById("first-step"),
	player1Name = document.getElementById("player1-name"),
	player2Name = document.getElementById("player2-name"),
	p1 = document.getElementById("p1"),
	p2 = document.getElementById("p2"),
	playerone = document.getElementById("playerone"),
	playertwo = document.getElementById("playertwo"),
	gamearea = document.getElementById("gamearea"),
	secretWord = document.getElementById("secret-word"),
	gallowsPic = document.getElementById("gallow-pic"),
	spaces = document.getElementById("spaces"),
	p1,
	p2,
	word,
	regex = /[A-Z]/;

//click Let's Play to reveal firstStep div
function startGame() {
    firstStep.style.visibility = "visible";
}
//upon entry of player names, function next will store player names as p1 and p2 for use later in high score tracking
//next() will also reveal the playerone div that asks for the player to enter a secret word


function next() {
    p1.innerHTML = player1Name.value;
    p1.style.visibility = "visible";
    p2.innerHTML = player2Name.value;
    p2.style.visibility = "visible";
	playerone.style.visibility = "visible";
}

//upon entry of the secret word js stores the entry into variable "secretWord"
//secretWord is then parsed into the answerArray
//answerArray is displayed in the gameArea as lines

function createWord() {
	word = secretWord.value;
	word = word.toUpperCase();
	answerArray = word.split("");
	createSpaces();
	playertwo.style.visibility = "visible";
	gamearea.style.visibility = "visible";
}

function createSpaces() {
	for (var i = 0; i < answerArray.length; i++) {
		if (regex.test(answerArray[i])) {
			spacesArray[i] = "_";
		} else {
			spacesArray[i] = answerArray[i];
		}
	}

	updateClue();
}

function guess(element) {
	var value = element.value,
		gallows = true,
		isWinner = true;

	element.setAttribute("disabled", "disabled");

	for (var i = 0; i < answerArray.length; i++) {
		if (answerArray[i] === value) {
			spacesArray[i] = value;
			gallows = false;
		}

		if (regex.test(answerArray[i]) && spacesArray[i] === "_") {
			isWinner = false;
		}
	}

	if (gallows) {
		updateGallows();
	} else {
		updateClue();

		if (isWinner) {
			youWin();
		}
	}
}

function updateGallows() {
	gallowsCounter++;
	gallowsPic.src = "Hangman" + gallowsCounter + ".jpg";
	if (gallowsCounter >= 7) {
		youLose();
	}
}

function updateClue() {
	var output = spacesArray.join(" ");
	spaces.innerHTML = output;
}

function youWin() {
	alert("Winner Winner, Chicken Dinner!");
}

function youLose() {
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
