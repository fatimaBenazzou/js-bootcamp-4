import styles from "./style.module.css";
type wordPRops = {
    wordToGuess: string;
    guessedLetters: string[];
    reveal?: boolean;
};
export default function Word({ wordToGuess, guessedLetters, reveal = false }: wordPRops) {
    const letters = wordToGuess.split("");

    return (
        <section className={styles["hangman-word"]}>
            {letters.map((letter: string, index) => (
                <span key={index} className={styles["letter-container"]}>
                    <span
                        style={{
                            visibility:
                                guessedLetters.includes(letter) || reveal ? "visible" : "hidden",
                            color:
                                !guessedLetters.includes(letter) && reveal ? "#721c24" : "inherit",
                        }}
                    >
                        {letter}
                    </span>
                </span>
            ))}
        </section>
    );
}
