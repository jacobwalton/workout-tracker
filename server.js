const express = require("express");
const mongoose = require("mongoose");
const Workout = require("./models/workout");
const data = require("./seeders/seed");
const router = require("./routes/workoutRoutes");
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitness", {
  useNewUrlParser: true,
  useFindAndModify: false,
});
mongoose.connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});
// routes

app.use(require("./routes/workoutRoutes"));

app.route("/").post(function (req, res) {
  Workout.insertMany(data, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Running on port http://localhost:${PORT}`);
});
