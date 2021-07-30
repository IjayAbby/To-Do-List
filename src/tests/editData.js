const setData = require('./setdata');

const editItem = (tasks, item) => {
  tasks[parseInt(item.dataset.id, 10)].description = item.textContent;
  setData();
};
module.exports = editItem;