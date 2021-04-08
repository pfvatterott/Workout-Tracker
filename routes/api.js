const router = require("express").Router();
const db = require("../models");

router.post("/api/workouts", ({ body }, res) => {
    db.Workout.create(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
    console.log(req.body)
    db.Workout.updateOne({ _id: req.params.id}, { $set: {"exercises": [req.body]}})
    .then(dbTransaction => {
      console.log(dbTransaction);
    })
    .catch(err => {
      console.log(err);
    });
})


router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({}).sort({_id: -1}).limit(9)
      .then(dbTransaction => {
        res.json(dbTransaction);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

module.exports = router;