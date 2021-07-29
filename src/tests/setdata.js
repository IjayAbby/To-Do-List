const toDoTasks = require("./todo");

const setData = () => {
    localStorage.setItemLocalStorage('TaskData', toDoTasks);
};

module.exports = setData;