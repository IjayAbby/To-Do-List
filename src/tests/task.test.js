const { expect, test } = require('@jest/globals');
const Task = require ('./task.js');
const addTask = require('./addTask.js');
const LocalStorage = require('./localStorage')
const setData = require('./setdata')

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

    test('add data to local storage', () => {
        
        expect(localStorage.list[1].value).toBe(localStorage.list[1].value)
    })
});

