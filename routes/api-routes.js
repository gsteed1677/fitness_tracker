Fitness.create(data)
  .then(fitnessDB => {
    console.log(fitnessDB);
  })
  .catch(({ message }) => {
    console.log(message);
  });