const { describe, test } = require('@jest/globals');
const editItem = require('./editData');
const jsdom = require('jsdom');
const toDoTasks = require('./todo');
const LocalStorage = require('./localStorage');
const { JSDOM } = jsdom;
const dom = new JSDOM('<!DOCTYPE html><ul class="container-list"></ul>');

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
  })
})