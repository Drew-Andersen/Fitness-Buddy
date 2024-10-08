const router = require('express').Router();
const { Workout, User, MuscleGroup, Exercise } = require('../models');
const withAuth = require('../utils/auth');

// GET the homepage
router.get('/', async (req, res) => {
  try {
    // Fetch some data to display on the homepage, if necessary
    const muscleGroupData = await MuscleGroup.findAll({
      include: [{ model: Exercise }]
    });

    // Serialize the data so the template can read it
    const muscle_groups = muscleGroupData.map((muscle_group) => muscle_group.get({ plain: true }));

    // Render the homepage template, passing in the data
    res.render('home', {
      muscle_groups,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET the login page
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect them to the homepage
  console.log('*************************************');
  console.log(req.session);
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});

router.get('/dashboard', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      // include: [{ model: Exercise }],
    });
    console.log(userData);
    const user = userData.get({ plain: true });

    res.render('dashboard', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/muscle_group/:id', withAuth, async (req, res) => {
  try {
    const exerciseData = await MuscleGroup.findByPk(req.params.id, {
      include: [{ model: Exercise}]
    })
    const exercise = exerciseData.get({ plain: true })

    res.render('muscle_group', {
      ...exercise,
      logged_in: req.session.logged_in
    })
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

router.get('/exercise/:id', async (req,res) => {
  try {
    const exerciseData = await Exercise.findByPk(req.params.id, {

    })
    const workout = exerciseData.get({ plain: true })

    res.render('exercise', {
      ...exercise
    })
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

module.exports = router;
