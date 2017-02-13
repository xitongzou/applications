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
    constructor() {

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