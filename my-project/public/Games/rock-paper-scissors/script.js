const choices = ['rock', 'paper', 'scissors'];

document.querySelectorAll('.choice').forEach(button => {
  button.addEventListener('click', function() {
    const userChoice = this.getAttribute('data-choice');
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const result = document.getElementById('result');

    if (userChoice === computerChoice) {
      result.textContent = `It's a draw! You both chose ${userChoice}.`;
    } else if (
      (userChoice === 'rock' && computerChoice === 'scissors') ||
      (userChoice === 'paper' && computerChoice === 'rock') ||
      (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
      result.textContent = `You win! ${userChoice} beats ${computerChoice}.`;
    } else {
      result.textContent = `You lose! ${computerChoice} beats ${userChoice}.`;
    }
  });
});
