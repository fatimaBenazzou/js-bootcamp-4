import { useCallback, useEffect } from "react";

type UseKeyboardHandler = {
    onLetter: (letter: string) => void;
    onRestart: () => void;
};

export function useKeyboardHandler({ onLetter, onRestart }: UseKeyboardHandler) {
    const handleKeyDown = useCallback(
        (e: KeyboardEvent) => {
            const key = e.key.toLowerCase();

            if (key === "enter") {
                e.preventDefault();
                onRestart();
            } else if (/^[a-z]$/.test(key)) {
                e.preventDefault();
                onLetter(key);
            }
        },
        [onLetter, onRestart]
    );

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [handleKeyDown]);
}
