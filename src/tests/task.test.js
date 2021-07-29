const { expect, test } = require('@jest/globals')
const Task = require ('./task.js')



describe ('add task', () => {
    test('description is empty string', () => {
        expect(Task).toEqual([]);
    }) ;
});

