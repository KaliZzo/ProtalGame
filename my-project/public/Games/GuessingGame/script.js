let randomNumber = Math.floor(Math.random() * 100) + 1;

document.getElementById('guess-button').addEventListener('click', function() {
  const userGuess = parseInt(document.getElementById('guess-input').value);
  const result = document.getElementById('result');

  if (userGuess === randomNumber) {
    result.textContent = 'Congratulations! You guessed the number!';
    result.style.color = 'green';
  } else if (userGuess > randomNumber) {
    result.textContent = 'Too high! Try again.';
    result.style.color = 'red';
  } else {
    result.textContent = 'Too low! Try again.';
    result.style.color = 'red';
  }
});
