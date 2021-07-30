const { expect, test } = require('@jest/globals');
const Task = require ('./task.js');
const addTask = require('./addTask.js');
const LocalStorage = require('./localStorage')
const setData = require('./setdata')
const removeCompletedItem = require('./remove')
const removeselectedItem = require('./removeTask')

const myTask = new Task("", false, 0);
const tasks = [];
const input = "new task";
const toDoTasks = require("./todo");

global.localStorage = new LocalStorage();

describe ('add task', () => {
    test('description is empty string', () => {
        expect(myTask.description).toEqual("");
    });

    test('add new task to array', () => {
        addTask(tasks, input);
        expect(tasks.length).toBe(1);
    });

    test('add 3 tasks to local storage', () => {
        setData();
        let list = localStorage.list[1];
        list = list[0];
        expect(list.value.length).toBe(3);
    });
});

describe('remove task', () => {
    test('remove task from array', () => {
        expect(removeCompletedItem(toDoTasks).length).toBe(2);
     });

     test('remove item', () => {
        removeselectedItem(toDoTasks, 0);
        expect(toDoTasks.length).toBe(2);
     });

     test('update local storage to have two elements', () => {
        setData();
        let list = localStorage.list[1];
        list = list[0];
        expect(list.value.length).toBe(2);
    });
});

