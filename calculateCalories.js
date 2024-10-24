/**
 * Fitness app tracks user progress. There are two types of exercises: cardio and strength training,
 * each with its own way of calculating burned calories.

 Create objects for these exercises and write a function that uses different calorie calculation methods
 depending on the exercise type, applying the call(), apply() and bind() methods.

 Requirements:
 1. Create an object cardioExercise for cardio workouts and an object strengthExercise for strength workouts.
 2. Each object should have a method to calculate burned calories.
    - For cardio workouts, calories are calculated with the formula: time (minutes) * intensity.
    - For strength workouts: weight (kg) * reps.
 3. Write a function calculateCalories that takes three arguments: time (or weight), intensity (or reps),
    and the type of exercise (cardio or strength).
 4. Use the call(), apply(), and bind() methods to correctly invoke the calorie calculation methods depending
    on the type of exercise.
 *
 */

const cardioExercise = {
  name: "Cardio",
  calculateCalories: function(duration, intensity) {
    return duration * intensity;
  },
};

const strengthExercise = {
  name: "Strength",
  calculateCalories: function(weight, reps) {
    return weight * reps;
  },
};

function calculateCalories(params, typeOfExercise, method) {
  const exercises = {
    cardio: cardioExercise,
    strength: strengthExercise,
  };

  const exercise = exercises[typeOfExercise];

  if (!exercise) {
    throw new Error("Invalid exercise type");
  }

  const calculateCaloriesFn = exercise.calculateCalories;
  let args;

  // define params depends on type of exercise
  if (typeOfExercise === 'cardio') {
    args = [params.duration, params.intensity];
  } else if (typeOfExercise === 'strength') {
    args = [params.weight, params.reps];
  } else {
    throw new Error("Invalid exercise type");
  }

  // use one of the methods depends on arguments
  if (method === 'call') {
    return calculateCaloriesFn.call(exercise, ...args);
  } else if (method === 'apply') {
    return calculateCaloriesFn.apply(exercise, args); // use args array for apply() method
  } else if (method === 'bind') {
    const boundCalculateCaloriesFn = calculateCaloriesFn.bind(exercise);

    return boundCalculateCaloriesFn(...args);
  } else {
    throw new Error("Invalid method type");
  }
}

// Usage:
console.log(calculateCalories({ duration: 30, intensity: 8 }, 'cardio', 'call')); // 240
console.log(calculateCalories({ weight: 150, reps: 12 }, 'strength', 'apply')); // 1800
console.log(calculateCalories({ duration: 20, intensity: 10 }, 'cardio', 'bind')); // 200
