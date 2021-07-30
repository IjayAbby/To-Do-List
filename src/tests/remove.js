const removeCompletedItem = (tasks) => {
  const newtasks = tasks.filter((task) => task.completed === false);
  return newtasks;
};

module.exports = removeCompletedItem;