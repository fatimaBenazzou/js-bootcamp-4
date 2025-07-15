import Keyboard from "./components/Keyboard";
import styles from "./App.module.css";
import Drawing from "./components/Drawing";
import { useCallback, useEffect, useState } from "react";
import getRandomWord from "./utils/getRandomWord";
import Word from "./components/Word";
import { useKeyboardHandler } from "./hooks/useKeyboardHandler";
import { Toaster } from "react-hot-toast";
import StatusMessage from "./components/StatusMessage";

function App() {
    const [wordToGuess, setWordToGuess] = useState<string>(getRandomWord);
    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
    const [gameState, setGameState] = useState<GameState>("playing");

    const incorrectLetters = guessedLetters.filter((letter) => !wordToGuess.includes(letter));
    const activeLetters = guessedLetters.filter((letter) => wordToGuess.includes(letter));

    useEffect(() => {
        if (incorrectLetters.length >= 6) {
            setGameState("lost");
        } else if (wordToGuess.split("").every((letter) => guessedLetters.includes(letter))) {
            setGameState("won");
        }
    });

    const resetGame = useCallback(() => {
        setGuessedLetters([]), setWordToGuess(getRandomWord()), setGameState("playing");
    }, []);

    const addGuessedLetter = useCallback(
        (letter: string) => {
            if (guessedLetters.includes(letter) || gameState !== "playing") return;

            setGuessedLetters((current) => [...current, letter]);
        },
        [guessedLetters, gameState]
    );

    useKeyboardHandler({ onLetter: addGuessedLetter, onRestart: resetGame });

    return (
        <>
            <Toaster />
            <main className={styles["app-container"]}>
                <h1>The Hangman</h1>
                {/* status message */}
                <StatusMessage gameState={gameState} />
                {/* drawing */}
                <Drawing numberOfGuesses={incorrectLetters.length} />
                {/* word */}
                <Word
                    wordToGuess={wordToGuess}
                    guessedLetters={guessedLetters}
                    reveal={gameState === "lost"}
                />
                {/* keyboard */}
                <Keyboard
                    disabled={gameState !== "playing"}
                    activeLetters={activeLetters}
                    inactiveLetters={incorrectLetters}
                    addGuessedLetter={addGuessedLetter}
                />
            </main>{" "}
        </>
    );
}

export default App;
