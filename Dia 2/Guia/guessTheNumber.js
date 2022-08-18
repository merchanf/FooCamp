function randomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function guessNumber() {
  let number = randomNumber();
  let guess = prompt("Guess a number between 1 and 100");
  let guessCount = 0;
  while (guess !== number) {
    if (guess < number) {
      guess = prompt("Too low! Guess again");
    } else if (guess > number) {
      guess = prompt("Too high! Guess again");
    }
    guessCount++;
  }
  alert(
    `You got it! The number was ${number}. You guessed ${guessCount} times.`
  );
}
