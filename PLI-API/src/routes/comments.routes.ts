import express from "express";
import {
  getAll,
  getById,
  updateById,
  deleteById,
  create
} from "../controllers/comments.controller";
import authenticateJWT from "../middlewares/authenticateJWT";

const routercomment = express();


routercomment.get("/comments", getAll);
routercomment.get("/comments/:id", getById);
routercomment.post("/comments",authenticateJWT, create);
routercomment.put("/comments/:id",authenticateJWT, updateById);
routercomment.delete("/comments/:id", authenticateJWT,deleteById);

export default routercomment;
