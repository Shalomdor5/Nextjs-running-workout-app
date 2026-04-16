let workouts: { name: string; distance: number }[] = [];

export function getWorkouts() {
  return workouts;
}

export function addWorkout(workout: { name: string; distance: number }) {
  workouts.push(workout);
}
