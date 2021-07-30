const setData = require('./setdata')

const editItem = (tasks, item) => {
  tasks[parseInt(item.dataset.id, 10)].description = item.textContent;
  setData();
}; 

const refreshEditableItems = (tasks) => {
  const editableItems = document.querySelectorAll('.container-list li .text-task');

  editableItems.forEach((item) => {
    item.addEventListener('input', editItem(tasks, item));
  });
};



module.exports = editItem;