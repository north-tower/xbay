import random

class Deck:
    def __init__(self):
        self.suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades']
        self.ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace']
        self.playing_cards = [(r, s) for s in self.suits for r in self.ranks]
        random.shuffle(self.playing_cards)

    def shuffle(self):
        random.shuffle(self.playing_cards)

    def return_card(self):
        if self.playing_cards:
            return self.playing_cards.pop()
        else:
            return None

#  a new deck
deck = Deck()

# Shuffl
deck.shuffle()

# Draw a random card
random_card = deck.return_card()

if random_card:
    print(f"The casino dealer gives you the {random_card[0]} of {random_card[1]}.")
else:
    print("The deck is empty.")
