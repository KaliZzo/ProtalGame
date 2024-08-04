let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let isGameActive = true;

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const handleResultValidation = () => {
  let roundWon = false;
  for (let i = 0; i < 8; i++) {
    const winCondition = winningConditions[i];
    let a = board[winCondition[0]];
    let b = board[winCondition[1]];
    let c = board[winCondition[2]];
    if (a === '' || b === '' || c === '') {
      continue;
    }
    if (a === b && b === c) {
      roundWon = true;
      break;
    }
  }

  if (roundWon) {
    document.getElementById('result').textContent = `Player ${currentPlayer} wins!`;
    isGameActive = false;
    return;
  }

  if (!board.includes('')) {
    document.getElementById('result').textContent = `Draw!`;
    isGameActive = false;
    return;
  }

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
};

const handleCellClick = (e) => {
  const clickedCell = e.target;
  const clickedCellIndex = parseInt(clickedCell.getAttribute('data-index'));

  if (board[clickedCellIndex] !== '' || !isGameActive) {
    return;
  }

  board[clickedCellIndex] = currentPlayer;
  clickedCell.textContent = currentPlayer;

  handleResultValidation();
};

const handleReset = () => {
  board = ['', '', '', '', '', '', '', '', ''];
  isGameActive = true;
  currentPlayer = 'X';
  document.getElementById('result').textContent = '';
  document.querySelectorAll('.cell').forEach(cell => cell.textContent = '');
};

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
document.getElementById('reset-button').addEventListener('click', handleReset);
