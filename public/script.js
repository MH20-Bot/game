const emojis = ['🍕','🍕','🍩','🍩','🍔','🍔','🍎','🍎','🍇','🍇','🍒','🍒','🍓','🍓','🍉','🍉'];
let shuffled = emojis.sort(() => 0.5 - Math.random());

const board = document.getElementById('game-board');
const moveCounter = document.getElementById('move-counter');
let moves = 0;
let flippedCards = [];
let matchedCount = 0;

shuffled.forEach((emoji, index) => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.emoji = emoji;
  card.dataset.index = index;
  card.innerText = '';
  board.appendChild(card);
});

board.addEventListener('click', (e) => {
  const card = e.target;
  if (!card.classList.contains('card') || card.classList.contains('flipped') || card.classList.contains('matched')) return;

  card.classList.add('flipped');
  card.innerText = card.dataset.emoji;
  flippedCards.push(card);

  if (flippedCards.length === 2) {
    moves++;
    moveCounter.innerText = moves;

    const [first, second] = flippedCards;
    if (first.dataset.emoji === second.dataset.emoji) {
      first.classList.add('matched');
      second.classList.add('matched');
      matchedCount += 2;
      if (matchedCount === emojis.length) {
        setTimeout(() => alert(`🎉 You win in ${moves} moves!`), 100);
      }
    } else {
      setTimeout(() => {
        first.classList.remove('flipped');
        second.classList.remove('flipped');
        first.innerText = '';
        second.innerText = '';
      }, 800);
    }
    flippedCards = [];
  }
});