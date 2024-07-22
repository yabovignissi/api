import express from "express";
import {
  create,
  getAll,
  getById,
  deleteById,
  updateById
} from "../controllers/Trips.controllers";
import authenticateJWT from "../middlewares/authenticateJWT";

const routertrip = express();


routertrip.get("/trips", getAll);
routertrip.get("/trips/:id", getById);
routertrip.post("/trips",authenticateJWT, create);
routertrip.put("/trips/:id",authenticateJWT, updateById);
routertrip.delete("/trips/:id",authenticateJWT, deleteById);

export default routertrip;
