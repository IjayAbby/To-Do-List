const removeSelectedItem = (tasks, index) => {
  tasks.splice(parseInt(index, 10), 1);
  tasks.forEach((task, index) => {
    task.index = index;
  });
};

module.exports = removeSelectedItem;