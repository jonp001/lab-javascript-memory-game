const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);
memoryGame.shuffleCards();

window.addEventListener('load', (event) => {
  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>`
    ;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;



  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {

      console.log(`Card clicked:`, card );

      card.classList.toggle('turned');
      memoryGame.pickedCards.push(card);

    if(memoryGame.pickedCards.length === 2) {
      const card1= memoryGame.pickedCards[0];
      const card2= memoryGame.pickedCards[1];

      const cardName1= card1.getAttribute('data-card-name');
      const cardName2= card2.getAttribute('data-card-name');
    

    if(memoryGame.checkIfPair(cardName1, cardName2)) {
      card1.classList.add('blocked');
      card2.classList.add('blocked');
    } else { setTimeout(() => {
      card1.classList.toggle('turned');
      card2.classList.toggle('turned');
    }, 1200)
    }
    memoryGame.pickedCards= []; //this allows us to clear the array after a card has been clicked
//make sure the above code is outside of the conditional or cards will not flip over if pair is found.
    const pairsClickedScore = document.querySelector('#pairs-clicked');
pairsClickedScore.innerText= memoryGame.pairsClicked ;

const pairsGuessedScore = document.querySelector('#pairs-guessed');
  pairsGuessedScore.innerText= memoryGame.pairsGuessed ;

  if(memoryGame.checkIfFinished(pairsGuessedScore== 12)) {
    setTimeout(() => {
      alert('Congratulations! You won!');
  }, 300)
  }
}
    })
  })
});