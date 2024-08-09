const router = require('express').Router();
const { Workout, User } = require('../models');
const withAuth = require('../utils/auth');

// GET the homepage
router.get('/', async (req, res) => {
  try {
    // Fetch some data to display on the homepage, if necessary
    const workoutData = await Workout.findAll({
      attributes: ['id', 'name', 'description'],
      include: [{ model: User, attributes: ['username'] }],
    });

    // Serialize the data so the template can read it
    const workouts = workoutData.map((workout) => workout.get({ plain: true }));

    // Render the homepage template, passing in the data
    res.render('homepage', {
      workouts,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET the login page
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect them to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

// GET the dashboard (only accessible to logged-in users)
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Workout }],
    });

    const user = userData.get({ plain: true });

    res.render('dashboard', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
