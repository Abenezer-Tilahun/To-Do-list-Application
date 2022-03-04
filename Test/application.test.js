import Application from '../modules/application/application.js';

describe('Add to list', () => {
  test('Test 1', () => {
    document.body.innerHTML = '<div>'
        + '  <ul class="todo-list"></ul>'
        + '</div>';
    const Test = new Application(true);
    Test.addTaskToList('TaskTest_1 of Sample 1');
    Test.addTaskToList('TaskTest_1 of Sample-2');
    Test.addTaskToList('TaskTest_1 of Sample-3');
    expect(Test.onSaveList()).not.toBeUndefined();
    const list = document.querySelectorAll('.todo-list li');
    expect(list).toHaveLength(3);
  });
  test('Test 2', () => {
    document.body.innerHTML = '<div>'
        + '  <ul class="todo-list"></ul>'
        + '</div>';
    const Test = new Application(true);
    Test.addTaskToList('TaskTest_2 of Sample-1');
    const list = document.querySelectorAll('.todo-list li');
    expect(list).toHaveLength(1);
  });
  test('Test 3', () => {
    document.body.innerHTML = '<div>'
        + '  <ul class="todo-list"></ul>'
        + '</div>';
    const Test = new Application(true);
    expect(Test.onLoadList()).not.toBeUndefined();
    Test.addTaskToList('TaskTest_3 of Sample-1');
    Test.addTaskToList('TaskTest_3 of Sample-2');
    Test.addTaskToList('TaskTest_3 of Sample-3');
    Test.addTaskToList('TaskTest_3 of Sample-4');
    Test.addTaskToList('TaskTest_3 of Sample-5');
    expect(Test.onSaveList()).not.toBeUndefined();
    const list = document.querySelectorAll('.todo-list li');
    expect(list).toHaveLength(5);
  });
  test('Test 4', () => {
    document.body.innerHTML = '<div>'
        + '  <ul class="todo-list"></ul>'
        + '</div>';
    const Test = new Application(true);
    Test.addTaskToList('TaskTest_4 of Sample-1');
    Test.addTaskToList('TaskTest_4 of Sample-2');
    Test.addTaskToList('TaskTest_4 of Sample-3');
    expect(Test.onSaveList()).not.toBeUndefined();
    const list = document.querySelectorAll('.todo-list li');
    expect(list).toHaveLength(3);
  });
  test('Test 5', () => {
    document.body.innerHTML = '<div>'
        + '  <ul class="todo-list"></ul>'
        + '</div>';
    const Test = new Application(true);
    Test.addTaskToList('TaskTest_5 of Sample-1');
    Test.addTaskToList('TaskTest_5 of Sample-2');
    Test.addTaskToList('TaskTest_5 of Sample-3');
    Test.addTaskToList('TaskTest_5 of Sample-3');
    expect(Test.onSaveList()).not.toBeUndefined();
    const list = document.querySelectorAll('.todo-list li');
    expect(list).toHaveLength(4);
  });
});
describe('Delete from list', () => {
  test('Test 6', () => {
    document.body.innerHTML = '<div>'
        + '  <ul class="todo-list"></ul>'
        + '</div>';
    const Test = new Application(true);
    Test.addTaskToList('TaskTest_1 of Sample 1');
    Test.addTaskToList('TaskTest_1 of Sample-2');
    Test.deleteTask(0);
    Test.addTaskToList('TaskTest_1 of Sample-3');
    Test.deleteTask(1);
    expect(Test.onSaveList()).not.toBeUndefined();
    const list = document.querySelectorAll('.todo-list li');
    expect(list).toHaveLength(1);
  });
  test('Test 7', () => {
    document.body.innerHTML = '<div>'
        + '  <ul class="todo-list"></ul>'
        + '</div>';
    const Test = new Application(true);
    Test.addTaskToList('TaskTest_2 of Sample-1');
    Test.deleteTask(0);
    expect(Test.onSaveList()).not.toBeUndefined();
    const list = document.querySelectorAll('.todo-list li');
    expect(list).toHaveLength(0);
  });
  test('Test 8', () => {
    document.body.innerHTML = '<div>'
        + '  <ul class="todo-list"></ul>'
        + '</div>';
    const Test = new Application(true);
    Test.addTaskToList('TaskTest_3 of Sample-1');
    Test.addTaskToList('TaskTest_3 of Sample-2');
    Test.addTaskToList('TaskTest_3 of Sample-3');
    Test.addTaskToList('TaskTest_3 of Sample-4');
    Test.addTaskToList('TaskTest_3 of Sample-5');
    Test.deleteTask(0);
    Test.deleteTask(1);
    Test.deleteTask(2);
    expect(Test.onSaveList()).not.toBeUndefined();
    const list = document.querySelectorAll('.todo-list li');
    expect(list).toHaveLength(2);
  });
  test('Test 9', () => {
    document.body.innerHTML = '<div>'
        + '  <ul class="todo-list"></ul>'
        + '</div>';
    const Test = new Application(true);
    Test.addTaskToList('TaskTest_4 of Sample-1');
    Test.deleteTask(0);
    Test.addTaskToList('TaskTest_4 of Sample-2');
    Test.addTaskToList('TaskTest_4 of Sample-3');
    expect(Test.onSaveList()).not.toBeUndefined();
    const list = document.querySelectorAll('.todo-list li');
    expect(list).toHaveLength(2);
  });
  test('Test 10', () => {
    document.body.innerHTML = '<div>'
        + '  <ul class="todo-list"></ul>'
        + '</div>';
    const Test = new Application(true);
    Test.deleteTask(0);
    Test.addTaskToList('TaskTest_5 of Sample-1');
    Test.deleteTask(0);
    Test.addTaskToList('TaskTest_5 of Sample-2');
    Test.deleteTask(10);
    Test.addTaskToList('TaskTest_5 of Sample-3');
    Test.deleteTask(0);
    Test.addTaskToList('TaskTest_5 of Sample-3');
    expect(Test.onSaveList()).not.toBeUndefined();

    const list = document.querySelectorAll('.todo-list li');
    expect(list).toHaveLength(2);
  });
});

describe('Edit Task Description', () => {
  test('Test 11', () => {
    const Test = new Application(true);
    Test.addTaskToList('TaskTest_1 of Sample 1');
    Test.addTaskToList('TaskTest_1 of Sample-2');
    Test.deleteTask(0);
    Test.addTaskToList('TaskTest_1 of Sample-3');
    Test.deleteTask(1);
    expect(Test.onSaveList()).not.toBeUndefined();
    const newDescription = 'This  value has changed';

    expect(Test.editTaskList(0, newDescription)).toEqual(newDescription);
  });

  test('Test 12', () => {
    const Test = new Application(true);
    expect(Test.onLoadList()).not.toBeUndefined();
    Test.addTaskToList('TaskTest_1 of Sample 1');
    Test.addTaskToList('TaskTest_1 of Sample-2');
    Test.addTaskToList('TaskTest_1 of Sample-3');
    expect(Test.onSaveList()).not.toBeUndefined();
    const newDescription = 'This is a good edge test';

    expect(Test.editTaskList(2, newDescription)).toEqual(newDescription);
  });
});

describe('Update Task Completed Status', () => {
  test('Test 13', () => {
    const Test = new Application(true);
    Test.addTaskToList('TaskTest_1 of Sample 1');
    Test.addTaskToList('TaskTest_1 of Sample-2');
    Test.deleteTask(0);
    Test.addTaskToList('TaskTest_1 of Sample-3');
    Test.deleteTask(1);
    expect(Test.onSaveList()).not.toBeUndefined();

    expect(Test.checkTask(0, true)).toBeFalsy();
  });

  test('Test 14', () => {
    const Test = new Application(true);
    expect(Test.onLoadList()).not.toBeUndefined();
    Test.addTaskToList('TaskTest_1 of Sample 1');
    Test.addTaskToList('TaskTest_1 of Sample-2');
    Test.addTaskToList('TaskTest_1 of Sample-3');
    expect(Test.onSaveList()).not.toBeUndefined();

    expect(Test.checkTask(2, false)).toBeTruthy();
  });
});

describe('Clear All Completed Tasks', () => {
  test('Test 15', () => {
    const Test = new Application(true);
    Test.addTaskToList('TaskTest_1 of Sample 1');
    Test.addTaskToList('TaskTest_1 of Sample-2');
    Test.deleteTask(0);
    Test.addTaskToList('TaskTest_1 of Sample-3');
    Test.deleteTask(1);
    expect(Test.onSaveList()).not.toBeUndefined();

    Test.checkTask(0, true);
    expect(Test.clearAllChecked()).toBeTruthy();
  });

  test('Test 16', () => {
    const Test = new Application(true);
    expect(Test.onLoadList()).not.toBeUndefined();
    Test.addTaskToList('TaskTest_1 of Sample 1');
    Test.addTaskToList('TaskTest_1 of Sample-2');
    Test.addTaskToList('TaskTest_1 of Sample-3');
    expect(Test.onSaveList()).not.toBeUndefined();

    Test.checkTask(2, true);
    Test.checkTask(0, true);
    expect(Test.clearAllChecked()).toBeTruthy();
  });
});