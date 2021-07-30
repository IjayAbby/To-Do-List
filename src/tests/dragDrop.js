const editItem = require('./editData');
const toDoTasks = require('./todo');

const dragDrop = (item, dragElement) => {
  if (dragElement !== item) {
    const value = dragElement.innerHTML;
    dragElement.innerHTML = item.innerHTML;
    item.innerHTML = value;
    editItem(toDoTasks, item);
    editItem(toDoTasks, dragElement);
  }
};

module.exports = dragDrop;