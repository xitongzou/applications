/*
This is the design for an abstract set of card games that you might see in a casino or elsewhere
@Author Tong Zou
 */

class Deck {

    // shuffled or not; boolean
    let isShuffed;

    // Cards in the deck; Array of Card objects
    const cards;

    // Cards that have been dealt out; this is extremely useful for games like Blackjack; Array of Card objects
    const dealtCards;

    // initially unshuffled
    /*
    @param cards the number of cards to instantiate with
     */
    constructor(cards) {
        // new Card(); gets instantiated here
    }

    // shuffles the deck
    shuffle() {

    }

    // returns the number of cards left in the deck
    /*
    @return the number of cards left in the deck
     */
    cardsLeft() {

    }

    // deals a card out
    /*
    @return a Card object from the Deck
     */
    dealCard() {

    }
}

class Hand {

    // Cards in hand; Array of Card objects
    const cards;

    // initially empty
    constructor() {

    }

    // empty the hand of any cards
    emptyHand() {

    }

    // add a card to the hand
    /*
    @param card a Card object to add
    */
    addCard(card) {

    }

    // remove a card from the hand
    /*
    @param card a Card object to remove
     */
    removeCard(card) {

    }

    // get a card from the hand at index, but not remove it
    /*
    @return a Card object
     */
    getCard(index) {

    }

    // return the entire hand
    /*
    @return a Card object array
     */
    getHand() {

    }

    // return the number of cards in the hand
    /*
    @return the number of cards in the hand
     */
    getCardCount() {

    }

    // sorts the hand in order by either suit or value
    /*
    @param method either 'suit' or 'value'
     */
    sortHand(method) {

    }
}

class Card {

    // the card's suit (Hearts, Diamonds, Spades, Clubs)
    const suit;

    // the card's value (Ace is 1, Jack is 11, Queen is 12, King is 13)
    const value;

    // constructs a card of the specified suit and value
    /*
    @param suit the suit of the card
    @param value the value of the card
     */
    constructor(suit, value) {

    }

    // gets the card's suit
    /*
    @return the card's suit
     */
    getSuit() {

    }

    // gets the card's value
    /*
    @return the card's value
     */
    getValue() {

    }
}

class Table {

    // decks on the table; array of Decks
    const decks;

    // hands (players) on the table; array of Hands
    const hands;

    // The current pot stakes on the table
    let bettingPot;

    /*
    @param decks the number of decks to init with
    @param hands the number of hands to init with
     */
    constructor(decks, hands) {
        // new Deck(); and new Hand(); gets instantiated here
        // Decks get instantiated with 52 cards initially in the Deck constructor
    }

    /*
    @return the deck at index
     */
    getDeck(index) {

    }

    /*
    @return the hand at index
     */
    getHand(index) {

    }

    // how many decks are on the table
    /*
    @return number of decks
     */
    numberOfDecks() {

    }

    // how many hands are on the table
    /*
    @return number of hands
     */
    numberOfHands() {

    }

    // add a hand (player) to the table
    /*
    @param hand a Hand to add
     */
    addHand(hand) {

    }

    // remove a hand (player) from the table
    /*
     @param hand the Hand to remove
     */
    removeHand(hand) {

    }

    // add or remove to the betting pot
    /*
    @param amount the amount to add or remove (if its negative)
     */
    modifyBettingPot(amount) {

    }

}

// pseudo code for starting a Poker game
// 1 deck, 4 players
const PokerGame = new Table (1, 4);

const deck = PokerGame.getDeck(0);

deck.shuffle();

const hand1 = PokerGame.getHand(0);
const hand2 = PokerGame.getHand(1);
const hand3 = PokerGame.getHand(2);
const hand4 = PokerGame.getHand(3);

hand1.addCard(deck.dealCard());
hand1.addCard(deck.dealCard());
hand2.addCard(deck.dealCard());
hand2.addCard(deck.dealCard());
hand3.addCard(deck.dealCard());
hand3.addCard(deck.dealCard());
hand4.addCard(deck.dealCard());
hand4.addCard(deck.dealCard());

// reveal 3 cards in opening for Texas Hold Em
deck.shuffle();
const card1 = deck.dealCard();
const card2 = deck.dealCard();
const card3 = deck.dealCard();

// take bets $20 for example
PokerGame.modifyBettingPot(20);

// reveal
const card4 = deck.dealCard();
const card5 = deck.dealCard();

// have a loop here for each hand...
hand1.sortHand('suit');
hand1.sortHand('value');
hand1.forEach((card) => {
    // do matching algorithms here to match with a combo like flush, straight, pair, three of a kind, etc
});

// hand with highest value combo wins and game starts over (new Table is created)