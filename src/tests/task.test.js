const { expect, test } = require('@jest/globals');
const Task = require ('./task.js');
const addTask = require('./addTask.js');

const myTask = new Task("", false, 0);
const tasks = [];
const input = "new task";

describe ('add task', () => {
    test('description is empty string', () => {
        expect(myTask.description).toEqual("");
    });

    test('add new task to array', () => {
        addTask(tasks, input);
        expect(tasks.length).toBe(1);
    });
});

