const toDoTasks = require("./todo");

const setData = () => {
    localStorage.setItemLocalStorage('TaskData', JSON.stringify(toDoTasks));
};

module.exports = setData;