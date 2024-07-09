//your JS code here. If required.
const submitButton = document.getElementById('submit');
const board = document.querySelector('.board');
const message = document.querySelector('.message');
let player1, player2, currentPlayer, moves;

submitButton.addEventListener('click', startGame);

function startGame() {
    player1 = document.getElementById('player1').value || "Player 1";
    player2 = document.getElementById('player2').value || "Player 2";
    currentPlayer = player1;
    moves = Array(9).fill(null);

    board.style.display = 'grid';
    document.querySelector('.player-inputs').style.display = 'none';
    message.textContent = `${currentPlayer == player1 ? "Player1" : "Player2"}, you're up`;

    document.querySelectorAll('.cell').forEach(cell => {
        cell.textContent = '';
        cell.addEventListener('click', handleCellClick, { once: true });
    });
}

function handleCellClick(event) {
    const cell = event.target;
    const index = cell.id - 1;

    cell.textContent = currentPlayer === player1 ? 'x' : 'o';
    moves[index] = currentPlayer;

    if (checkWin()) {
		
        message.textContent = `${currentPlayer == player1 ? "Player1" : "Player2"} congratulations you won!`;
        endGame();
    } else if (moves.every(move => move !== null)) {
        message.textContent = "It's a tie";
    } else {
        currentPlayer = currentPlayer === player1 ? player2 : player1;
        message.textContent = `${currentPlayer == player1 ? "Player1" : "Player2"}, you're up`;
    }
}

function checkWin() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    return winPatterns.some(pattern =>
        pattern.every(index => moves[index] === currentPlayer)
    );
}

function endGame() {
    document.querySelectorAll('.cell').forEach(cell => {
        cell.removeEventListener('click', handleCellClick);
    });
}
