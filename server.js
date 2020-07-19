const express = require("express");
const mongoose = require("mongoose");
const Workout = require("./models/workout");
const router = require("./routes/workoutRoutes");
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
require("./routes/html-routes.js")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitness", {
  useNewUrlParser: true,
  useFindAndModify: false,
});
mongoose.connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// routes
const exerciseRouter = require("./routes/workoutRoutes");

app.use(require("./routes/workoutRoutes"));

app.listen(PORT, () => {
  console.log(`Running on port http://localhost:${PORT}`);
});
