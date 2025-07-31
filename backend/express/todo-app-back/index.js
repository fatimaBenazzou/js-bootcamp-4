import "dotenv/config";
import express from "express";
import { connectDB } from "./config/db.js";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import todosRouter from "./routes/todos.js";

const app = express();
const PORT = process.env.PORT || 3333;

app.set("trust proxy", true);
app.use(helmet());
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

app.use(
    cors({
        credentials: true,
        origin: new RegExp(process.env.CORS_ORIGIN || "http://localhost:5173"),
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/todos", todosRouter);

connectDB().then(() => {
    app.listen(PORT, function () {
        console.log(`Server is Running on http://localhost:${PORT}`);
    });
});
