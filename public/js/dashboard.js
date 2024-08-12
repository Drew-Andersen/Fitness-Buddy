// Goals variables
const goalWeightInput = document.getElementById('input-goal-weight');
const currentWeightInput = document.getElementById('input-current-weight');
const currentWeight = document.getElementById('current-div');
const goalWeight = document.getElementById('goal-div');

// Workout variables
const completedWorkouts = document.getElementById('completed-workouts');
const upcomintWorkouts = document.getElementById('upcoming-workouts');

// Render the goals
function renderGoals () {
    // Created elements to hold the variables
    const weight_current = $('<h3>');
    const weight_goal = $('<h3>');

    // Add text to the elements that were created
    weight_current.text(currentWeightInput);
    weight_goal.text(goalWeightInput);

    // Append to the page
    currentWeight.append(weight_current);
    goalWeight.append(weight_goal);
}

// Render the workout section
function renderWorkouts () {
    // Created elements to hold the variables
    
}