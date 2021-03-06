const { describe, test, expect } = require('@jest/globals');
const jsdom = require('jsdom');
const editItem = require('./editData');
const toDoTasks = require('./todo');
const LocalStorage = require('./localStorage');
const refrestCompletedTask = require('./completedTask');

const { JSDOM } = jsdom;
const dom = new JSDOM('<!DOCTYPE html><ul class="container-list"></ul>');
const dragDrop = require('./dragDrop');
const removeCompletedItem = require('./remove');

global.localStorage = new LocalStorage();

describe('Editing the task description', () => {
  test('Edit task description', () => {
    const item = dom.window.document.createElement('label');
    item.setAttribute('data-id', 0);
    item.innerHTML = 'Play guitar';
    editItem(toDoTasks, item);
    const list = localStorage.list[1];
    const taskList = list[0];
    expect(taskList.value[0].description).toBe('Play guitar');
  });
});

describe('Updating an item completed status', () => {
  test('update status', () => {
    const list = localStorage.list[1];
    const taskList = list[0];
    const checkbox = dom.window.document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('data-id', 0);
    checkbox.checked = true;
    refrestCompletedTask(checkbox.checked, checkbox);

    expect(taskList.value[0].completed).toBe(true);
  });
});

describe("Updating an item's index value upon drag/drop actions", () => {
  test('drag and drop', () => {
    const item = dom.window.document.createElement('li');
    item.setAttribute('data-id', 0);
    item.innerHTML = 'Play guitar';
    const item2 = dom.window.document.createElement('li');
    item2.setAttribute('data-id', 2);
    item2.innerHTML = 'Watch the sunset';
    dragDrop(item, item2);
    const list = localStorage.list[1];
    const taskList = list[0];
    expect(taskList.value[0].description).toBe('Watch the sunset');
  });
});

describe('Clear all selected tasks', () => {
  test('remove task from array', () => {
    expect(removeCompletedItem(toDoTasks).length).toBe(1);
  });
});