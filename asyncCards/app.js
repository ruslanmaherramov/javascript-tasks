// Use the 'Deck of Cards' API, which has two endpoints:
// https://deckofcardsapi.com/api/deck/new/shuffle - returns a “deck_id”, an ID to a unique, shuffled deck of cards.
// https://deckofcardsapi.com/api/deck/[deck-id]/draw - draws a card from the given deck ID, returns info about this card.

// Build an HTML page that gets a new deck on page load. Add button on the page, on click draws a card from that deck.
// Every time you click the button, display another new card, until there are no cards left in the deck.
// (when the deck is exhausted, hide the button).

const BASE_URL = "https://deckofcardsapi.com/api/deck";
let btn = document.querySelector('#add-card');
let deckID;

async function handleButtonClick() {
  const responseCard = await fetch(`${BASE_URL}/${deckID}/draw`);
  const dataCard = await responseCard.json();

  // add card on the page
  const cardsContainer = document.querySelector('#cards');
  const card = document.createElement('img');
  card.classList.add('card');
  card.src = dataCard.cards[0].image;
  cardsContainer.append(card);

  if (dataCard['remaining'] === 0) {
    btn.remove();
  }
}

async function setupGame() {
  const responseDeck = await fetch(`${BASE_URL}/new/shuffle`);
  const dataDeck = await responseDeck.json();
  deckID = dataDeck['deck_id'];
  btn.addEventListener('click', handleButtonClick);
}

setupGame();
