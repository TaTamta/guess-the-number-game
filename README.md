# Guess My Number

A small browser game written in **vanilla JavaScript**: guess the secret number between 1 and 20 in as few tries as possible.

## How to play

1. Type a number between 1 and 20 and press **Check**.
2. The game tells you whether your guess is too high or too low. Each wrong guess costs a point.
3. Guess correctly to win. Your best score is kept as the high score.
4. Press **Again!** to start a new round with a new secret number.

## Highlights

- Input validation for empty and out-of-range guesses
- Score and high-score tracking
- Visual feedback on win
- Game messages and states kept in lookup objects instead of scattered strings

## Running locally

No build step needed. Clone the repo and open `index.html` in your browser.

```bash
git clone https://github.com/TaTamta/guess-the-number-game.git
```

## Author

**Tamta Tavartkiladze** — [GitHub](https://github.com/TaTamta)
