import routerusers from "./routes/users.routes";
import routerTrips from "./routes/trips.routes";
import routerSteps from "./routes/steps.routes";
import routerPhotos from "./routes/photos.routes";
import routerComments from "./routes/comments.routes";

const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use("/", routerusers);
app.use("/", routerTrips);
app.use("/", routerSteps);
app.use("/", routerPhotos);
app.use("/", routerComments);

app.listen(port, () => {
  // console.log(`Example app listening on port ${port}`);
  console.log("Authentication service started on port 3000");
});
