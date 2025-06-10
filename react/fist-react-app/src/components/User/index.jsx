export default function User({ avatar, name }) {
    console.log({ avatar });
    return (
        <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
            <img
                src={avatar}
                alt=""
                style={{ width: 50, height: 50, borderRadius: "50%", marginRight: 10 }}
            />
            <span>{name}</span>
        </div>
    );
}
