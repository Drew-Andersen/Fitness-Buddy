const router = require('express').Router();
const { MuscleGroup, Exercise } = require('../../models');
const { increment } = require('../../models/User');

// /api/muscle_group
router.get('/', async (req, res) => {
    try{
        const muscleGroupData = await MuscleGroup.findAll({
            include: [{ model: Exercise}]
        })

        res.status(200).json(muscleGroupData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

// /api/muscle_group/(id)
router.get('/:id', async (req, res) => {
    try {
        const muscleGroupData = await MuscleGroup.findByPk(req.params.id, {
            include: [{ model: Exercise }]
        })

        if (!muscleGroupData) {
            res.status(404).json({ message: 'No muscle group with that id.'});
            return;
        }

        res.status(200).json(muscleGroupData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports = router;