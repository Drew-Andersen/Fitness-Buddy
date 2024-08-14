const router = require('express').Router();
const { Exercise, MuscleGroup } = require('../../models');

// GET all exercises
router.get('/', async (req, res) => {
  try {
    const exercises = await Exercise.findAll({
      include: [{ model: MuscleGroup }],
    });
    res.status(200).json(exercises);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single exercise by id
router.get('/:id', async (req, res) => {
  try {
    const exercise = await Exercise.findByPk(req.params.id, {
      include: [{ model: MuscleGroup }],
    });

    if (!exercise) {
      res.status(404).json({ message: 'No exercise found with this id!' });
      return;
    }

    res.status(200).json(exercise);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST a new exercise
router.post('/', async (req, res) => {
  try {
    const newExercise = await Exercise.create(req.body);
    res.status(201).json(newExercise);
  } catch (err) {
    res.status(400).json(err);
  }
});

// PUT update an exercise by id
router.put('/:id', async (req, res) => {
  try {
    const updatedExercise = await Exercise.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!updatedExercise[0]) {
      res.status(404).json({ message: 'No exercise found with this id!' });
      return;
    }

    res.status(200).json(updatedExercise);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE an exercise by id
router.delete('/:id', async (req, res) => {
  try {
    const deletedExercise = await Exercise.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!deletedExercise) {
      res.status(404).json({ message: 'No exercise found with this id!' });
      return;
    }

    res.status(200).json(deletedExercise);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/:id', async (req,res) => {
  try {
    const newExercise = await Exercise.create({
      ...req.body,
      muscle_group_id: req.params.id,
    })

    res.status(200).json(newExercise);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

module.exports = router;
