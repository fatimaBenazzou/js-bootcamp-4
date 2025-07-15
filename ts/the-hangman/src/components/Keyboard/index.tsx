import styles from "./style.module.css";

const KEYS = "abcdefghijklmnopqrstuvwxyz".split("");

type KeyboardProps = {
    activeLetters: string[];
    inactiveLetters: string[];
    addGuessedLetter: (letter: string) => void;
    disabled?: boolean;
};

export default function Keyboard({
    activeLetters,
    inactiveLetters,
    addGuessedLetter,
    disabled = false,
}: KeyboardProps) {
    return (
        <section className={styles.keyboard}>
            {KEYS.map((key: string) => {
                const isActive = activeLetters.includes(key);
                const isInactive = inactiveLetters.includes(key);

                return (
                    <button
                        key={key}
                        onClick={() => addGuessedLetter(key)}
                        className={`${styles.btn} ${isActive ? styles.active : ""} ${
                            isInactive ? styles.inactive : ""
                        }`}
                        disabled={disabled || isActive || isInactive}
                    >
                        {key}
                    </button>
                );
            })}
        </section>
    );
}
