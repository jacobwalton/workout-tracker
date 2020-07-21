const Workout = require("../models/workout.js");
const router = require("express").Router();
module.exports = function (app) {
  app.get("/api/workouts", function (req, res) {
    Workout.find()
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.post("/api/workouts", function (req, res) {
    Workout.create({})
      .then((dbWorkout) => res.json(dbWorkout))
      .catch((err) => {
        console.log("err", err);
        res.json(err);
      });
  });

  app.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(
      params.id,
      { $push: { exercises: body } },
      { new: true }
    )
      .then((dbWorkout) => res.json(dbWorkout))
      .catch((err) => {
        console.log("err", err);
        res.json(err);
      });
  });
};
