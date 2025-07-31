import express from "express";
import morgan from "morgan";

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static("./public"));

const user = {
    firstName: "Fatima",
    lastName: "Benazzou",
    note: 12,
    skills: [
        { name: "JavaScript", level: "Advanced" },
        { name: "React", level: "Advanced" },
        { name: "Redux Toolkit", level: "Intermediate" },
        { name: "React Native", level: "Intermediate" },
        { name: "Node.js", level: "Advanced" },
        { name: "TypeScript", level: "Intermediate" },
        { name: "Angular", level: "Intermediate" },
        { name: "HTML & CSS", level: "Advanced" },
        { name: "Tailwind CSS", level: "Intermediate" },
        { name: "MongoDB", level: "Intermediate" },
        { name: "Git", level: "Advanced" },
        { name: "Docker", level: "Basic" },
        { name: "Figma", level: "Basic" },
    ],
};

const fileError = (res) => (err, html) => {
    if (err) res.status(404).send("File not found");
    else res.send(html);
};

// GET request to the root URL
app.get("/", (req, res) => {
    res.render("home", fileError(res));
});

app.post("/note", (req, res) => {
    user.note = Number(req.body["exam-note"]);
    res.render(`received-note`, fileError(res));
});

app.get("/about", (req, res) => {
    res.render(`about`, { user });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
