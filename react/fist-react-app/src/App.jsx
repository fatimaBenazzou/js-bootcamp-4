import User from "./components/User";
import UserCard from "./components/User/UserCard";

const users = [
    {
        name: "Fatima",
        job: "GMC Instructor",
        location: "Alger",
        avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
        name: "Mokrane",
        job: "GMC Instructor",
        location: "Alger",
        avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
        name: "Meziane",
        job: "GMC Instructor",
        location: "Alger",
        avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
        name: "Fatima",
        job: "GMC Instructor",
        location: "Alger",
        avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
        name: "Mokrane",
        job: "GMC Instructor",
        location: "Alger",
        avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
        name: "Meziane",
        job: "GMC Instructor",
        location: "Alger",
        avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
        name: "Fatima",
        job: "GMC Instructor",
        location: "Alger",
        avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
        name: "Mokrane",
        job: "GMC Instructor",
        location: "Alger",
        avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
        name: "Meziane",
        job: "GMC Instructor",
        location: "Alger",
        avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
        name: "Fatima",
        job: "GMC Instructor",
        location: "Alger",
        avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
        name: "Mokrane",
        job: "GMC Instructor",
        location: "Alger",
        avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
        name: "Meziane",
        job: "GMC Instructor",
        location: "Alger",
        avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
        name: "Fatima",
        job: "GMC Instructor",
        location: "Alger",
        avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
        name: "Mokrane",
        job: "GMC Instructor",
        location: "Alger",
        avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
        name: "Meziane",
        job: "GMC Instructor",
        location: "Alger",
        avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
        name: "Fatima",
        job: "GMC Instructor",
        location: "Alger",
        avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
        name: "Mokrane",
        job: "GMC Instructor",
        location: "Alger",
        avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
        name: "Meziane",
        job: "GMC Instructor",
        location: "Alger",
        avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
        name: "Fatima",
        job: "GMC Instructor",
        location: "Alger",
        avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
        name: "Mokrane",
        job: "GMC Instructor",
        location: "Alger",
        avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
        name: "Meziane",
        job: "GMC Instructor",
        location: "Alger",
        avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
        name: "Fatima",
        job: "GMC Instructor",
        location: "Alger",
        avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
        name: "Mokrane",
        job: "GMC Instructor",
        location: "Alger",
        avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
        name: "Meziane",
        job: "GMC Instructor",
        location: "Alger",
        avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
        name: "Fatima",
        job: "GMC Instructor",
        location: "Alger",
        avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
        name: "Mokrane",
        job: "GMC Instructor",
        location: "Alger",
        avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
        name: "Meziane",
        job: "GMC Instructor",
        location: "Alger",
        avatar: "https://i.pravatar.cc/150?img=2",
    },
];
function App() {
    return (
        <>
            <h1>User Profil</h1>
            {users.map((user) => (
                <UserCard user={user} />
            ))}
        </>
    );
}

export default App;
