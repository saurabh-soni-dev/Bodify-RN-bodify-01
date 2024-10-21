const setsType = Array.from({length: 1}, (_, index) => ({
  id: index + 1,
  title: `Sets`,
}));
const repsType = ['Seconds', 'Minutes', 'Repetitions']?.map((item, index) => {
  return {
    id: index + 1,
    title: item,
  };
});
const types = [
  {
    id: 1,
    title: 'Exercise',
  },
  {
    id: 2,
    title: 'Stretch',
  },
];

const tags = [
  {
    id: 1,
    title: 'Arms',
  },
  {
    id: 2,
    title: 'Back',
  },
  {
    id: 3,
    title: 'Chest',
  },
  {
    id: 4,
    title: 'Legs',
  },
  {
    id: 5,
    title: 'Core',
  },
];

const equipment = [
  {
    id: 1,
    title: 'Barbell',
  },
  {
    id: 2,
    title: 'Dumbbell',
  },
  {
    id: 3,
    title: 'Kettlebell',
  },
  {
    id: 4,
    title: 'Bodyweight',
  },
  {
    id: 5,
    title: 'Resistance Band',
  },
];

const mainMuscle = [
  {
    id: 1,
    title: 'Biceps',
  },
  {
    id: 2,
    title: 'Triceps',
  },
  {
    id: 3,
    title: 'Back',
  },
  {
    id: 4,
    title: 'Chest',
  },
  {
    id: 5,
    title: 'Quads',
  },
  {
    id: 6,
    title: 'Hamstrings',
  },
  {
    id: 7,
    title: 'Shoulders',
  },
  {
    id: 8,
    title: 'Glutes',
  },
  {
    id: 9,
    title: 'Calves',
  },
  {
    id: 10,
    title: 'Abs',
  },
];

const secondaryMuscle = [
  {
    id: 1,
    title: 'Forearms',
  },
  {
    id: 2,
    title: 'Abs',
  },
  {
    id: 3,
    title: 'Obliques',
  },
  {
    id: 4,
    title: 'Glutes',
  },
  {
    id: 5,
    title: 'Hamstrings',
  },
  {
    id: 6,
    title: 'Calves',
  },
];

export {
  equipment,
  mainMuscle,
  repsType,
  secondaryMuscle,
  setsType,
  tags,
  types,
};
