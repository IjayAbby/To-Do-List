const { expect, test } = require('@jest/globals');
const Task = require ('./task.js');
const addTask = require('./addTask.js');
const LocalStorage = require('./localStorage')
const setData = require('./setdata')
const removeCompletedItem = require('./remove')

const myTask = new Task("", false, 0);
const tasks = [];
const input = "new task";

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

    test('remove task from local storage', () => {
       setData();
       expect(removeCompletedItem )
    })


});

