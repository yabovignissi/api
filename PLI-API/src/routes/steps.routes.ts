import express from "express";
import {
  create,
  getAll,
  getById,
  updateById,
  deleteById
} from "../controllers/steps.controller";
import authenticateJWT from "../middlewares/authenticateJWT";

const routerstep = express();

routerstep.get("/steps/", getAll);
routerstep.get("/steps/:id", getById);
routerstep.post("/steps",authenticateJWT, create);
routerstep.put("/steps/:id",authenticateJWT, updateById);
routerstep.delete("/steps/:id",authenticateJWT, deleteById);

export default routerstep;
