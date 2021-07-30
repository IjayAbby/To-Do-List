const { expect, test } = require('@jest/globals');
const Task = require ('./task.js');
const addTask = require('./addTask.js');
const LocalStorage = require('./localStorage')
const setData = require('./setdata')
const removeCompletedItem = require('./remove')
const removeselectedItem = require('./removeTask')
const createItemTask = require('./addItem.js');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const myTask = new Task("", false, 0);
const tasks = [];
const input = "new task";
const toDoTasks = require("./todo");

const dom = new JSDOM(`<!DOCTYPE html><ul class="container-list"></ul>`);
const listContainer = dom.window.document.querySelector('.container-list');

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

   test('f', () => {
       toDoTasks.forEach((task) => {
        listContainer.insertAdjacentHTML(
            'beforeend',
            `<li data-id="${task.index}" draggable="true" class="item">
            <input class="checkbox" type="checkbox" data-id="${task.index}">
            <label class="text-task" data-id="${task.index}" contenteditable=true>${task.description}</label><br>
            <i class="fas fa-trash-alt remove" data-id="${task.index}"></i>
            <i class="fas fa-ellipsis-v icon-item"></i>
            </li>
            `,
        );
       });
        expect(listContainer.getElementsByTagName("li").length).toBe(3);
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

module.exports = dom;