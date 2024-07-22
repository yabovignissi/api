import {
    getAll,
    getById,
    register,
    login,
    updateById,
    deleteById
  } from "../controllers/Users.controllers";
  import authenticateJWT from "../middlewares/authenticateJWT";
  
  const express = require("express");
  
  const routerusers = express();

routerusers.get("/users/", getAll);
routerusers.get("/users/:id", getById);
routerusers.post("/users/register/", register);
routerusers.post("/users/auth/", login);
routerusers.put("/users/:id", authenticateJWT, updateById);
routerusers.delete("/users/:id", authenticateJWT, deleteById);
  
  export default routerusers;