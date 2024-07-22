import express from "express";
import {
  create,
  getAll,
  getById,
  updateById,
  deleteById,
} from "../controllers/photos.controller";
import authenticateJWT from "../middlewares/authenticateJWT";

const routerphoto = express();

routerphoto.post("/photos", create);
routerphoto.get("/photos", getAll);
routerphoto.get("/photos/:id",authenticateJWT, getById);
routerphoto.put("/photos/:id",authenticateJWT, updateById);
routerphoto.delete("/photos/:id",authenticateJWT, deleteById);

export default routerphoto;
