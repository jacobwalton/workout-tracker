const Workout = require("../models/workout.js");
module.exports = function (app) {
  app.get("/api/workouts", function (_, res) {
    Workout.find()
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.post("/api/workouts", function (_, res) {
    Workout.create({})
      .then((dbWorkout) => res.json(dbWorkout))
      .catch((err) => {
        console.error("err", err);
        res.json(err);
      });
  });

  app.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(
      params.id,
      { $push: { exercises: JSON.stringify(body) } },
      { new: true }
    )
      .then((dbWorkout) => res.json(dbWorkout))
      .catch((err) => {
        console.error("err", err);
        res.json(err);
      });
  });
};
