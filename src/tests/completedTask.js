const toDoTasks = require('./todo')

const refrestCompletedTask = (bool, element) => {
    if (bool) {
      toDoTasks[parseInt(element.dataset.id, 10)].completed = true;
      element.setAttribute('checked', 'true');
    } else {
      toDoTasks[parseInt(element.dataset.id, 10)].completed = false;
      element.removeAttribute('checked');
    }
};

module.exports = refrestCompletedTask;