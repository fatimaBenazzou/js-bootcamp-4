import User from ".";
import styles from "./style.module.css";
export default function UserCard({ user }) {
    return (
        <div className={styles.card}>
            <User avatar={user.avatar} name={user.name} />
            <p>Job: {user.job}</p>
            <p>Ville: {user.location}</p>
        </div>
    );
}
