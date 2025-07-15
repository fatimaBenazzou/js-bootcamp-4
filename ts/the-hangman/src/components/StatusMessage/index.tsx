import { useEffect } from "react";
import styles from "./StatusMEssage.module.css";
import toast from "react-hot-toast";
export default function StatusMessage({ gameState }: { gameState: GameState }) {
    useEffect(() => {
        if (gameState === "won") {
            toast.success("Congratulations !");
        } else if (gameState === "lost") toast.error("Game Over ! !");
    }, [gameState]);

    if (gameState === "won") {
        return (
            <div className={`${styles["status-message"]} ${styles["won"]}`}>
                🎉 Winner! Press Enter to restart.
            </div>
        );
    }
    if (gameState === "lost") {
        return (
            <div className={`${styles["status-message"]} ${styles["lost"]}`}>
                💀 Game Over! Press Enter to restart.
            </div>
        );
    }
    return null;
}
