import { Router } from "express";
import { getTodos, createTodo } from "../controllers/todos.js";

const router = Router();

// router.get("/", getTodos);
// router.post("/", createTodo);
router.route("/").get(getTodos).post(createTodo);
router.delete("/completed", (req, res) => {});
// router.put("/:id", (req, res) => {});
// router.delete("/:id", (req, res) => {});
router
    .route("/:id")
    .put((req, res) => {})
    .delete((req, res) => {});

export default router;
