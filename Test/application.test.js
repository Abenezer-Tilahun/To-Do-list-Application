import Application from '../modules/application/application.js';

describe('Add to list', () => {
  test('Test 1', () => {
    document.body.innerHTML = '<div>'
        + '  <ul class="todo-list"></ul>'
        + '</div>';

    const Test1 = new Application(true);
    Test1.addTaskToList('TaskTest_1 of Sample 1');
    Test1.addTaskToList('TaskTest_1 of Sample-2');
    Test1.addTaskToList('TaskTest_1 of Sample-3');
    Test1.onSaveList();
    const list = document.querySelectorAll('.todo-list li');
    expect(list).toHaveLength(3);
  });
  test('Test 2', () => {
    document.body.innerHTML = '<div>'
        + '  <ul class="todo-list"></ul>'
        + '</div>';

    const Test2 = new Application(true);
    Test2.addTaskToList('TaskTest_2 of Sample-1');
    const list = document.querySelectorAll('.todo-list li');
    expect(list).toHaveLength(1);
  });
  test('Test 3', () => {
    document.body.innerHTML = '<div>'
        + '  <ul class="todo-list"></ul>'
        + '</div>';

    const Test3 = new Application(true);
    Test3.onLoadList();
    Test3.addTaskToList('TaskTest_3 of Sample-1');
    Test3.addTaskToList('TaskTest_3 of Sample-2');
    Test3.addTaskToList('TaskTest_3 of Sample-3');
    Test3.addTaskToList('TaskTest_3 of Sample-4');
    Test3.addTaskToList('TaskTest_3 of Sample-5');
    Test3.onSaveList();
    const list = document.querySelectorAll('.todo-list li');
    expect(list).toHaveLength(5);
  });
  test('Test 4', () => {
    document.body.innerHTML = '<div>'
        + '  <ul class="todo-list"></ul>'
        + '</div>';

    const Test4 = new Application(true);
    Test4.addTaskToList('TaskTest_4 of Sample-1');
    Test4.addTaskToList('TaskTest_4 of Sample-2');
    Test4.addTaskToList('TaskTest_4 of Sample-3');
    Test4.onSaveList();
    const list = document.querySelectorAll('.todo-list li');
    expect(list).toHaveLength(3);
  });
  test('Test 5', () => {
    document.body.innerHTML = '<div>'
        + '  <ul class="todo-list"></ul>'
        + '</div>';

    const Test5 = new Application(true);
    Test5.addTaskToList('TaskTest_5 of Sample-1');
    Test5.addTaskToList('TaskTest_5 of Sample-2');
    Test5.addTaskToList('TaskTest_5 of Sample-3');
    Test5.addTaskToList('TaskTest_5 of Sample-3');
    Test5.onSaveList();
    const list = document.querySelectorAll('.todo-list li');
    expect(list).toHaveLength(4);
  });
});
describe('Delete from list', () => {
  test('Test 6', () => {
    document.body.innerHTML = '<div>'
        + '  <ul class="todo-list"></ul>'
        + '</div>';

    const Test1 = new Application(true);
    Test1.addTaskToList('TaskTest_1 of Sample 1');
    Test1.addTaskToList('TaskTest_1 of Sample-2');
    Test1.deleteTask(0);
    Test1.addTaskToList('TaskTest_1 of Sample-3');
    Test1.deleteTask(1);
    Test1.onSaveList();
    const list = document.querySelectorAll('.todo-list li');
    expect(list).toHaveLength(1);
  });
  test('Test 7', () => {
    document.body.innerHTML = '<div>'
        + '  <ul class="todo-list"></ul>'
        + '</div>';

    const Test2 = new Application(true);
    Test2.addTaskToList('TaskTest_2 of Sample-1');
    Test2.deleteTask(0);
    Test2.onSaveList();
    const list = document.querySelectorAll('.todo-list li');
    expect(list).toHaveLength(0);
  });
  test('Test 8', () => {
    document.body.innerHTML = '<div>'
        + '  <ul class="todo-list"></ul>'
        + '</div>';

    const Test3 = new Application(true);
    Test3.addTaskToList('TaskTest_3 of Sample-1');
    Test3.addTaskToList('TaskTest_3 of Sample-2');
    Test3.addTaskToList('TaskTest_3 of Sample-3');
    Test3.addTaskToList('TaskTest_3 of Sample-4');
    Test3.addTaskToList('TaskTest_3 of Sample-5');
    Test3.deleteTask(0);
    Test3.deleteTask(1);
    Test3.deleteTask(2);
    Test3.onSaveList();
    const list = document.querySelectorAll('.todo-list li');
    expect(list).toHaveLength(2);
  });
  test('Test 9', () => {
    document.body.innerHTML = '<div>'
        + '  <ul class="todo-list"></ul>'
        + '</div>';

    const Test4 = new Application(true);
    Test4.addTaskToList('TaskTest_4 of Sample-1');
    Test4.deleteTask(0);
    Test4.addTaskToList('TaskTest_4 of Sample-2');
    Test4.addTaskToList('TaskTest_4 of Sample-3');
    Test4.onSaveList();
    const list = document.querySelectorAll('.todo-list li');
    expect(list).toHaveLength(2);
  });
  test('Test 10', () => {
    document.body.innerHTML = '<div>'
        + '  <ul class="todo-list"></ul>'
        + '</div>';

    const Test5 = new Application(true);
    Test5.deleteTask(0);
    Test5.addTaskToList('TaskTest_5 of Sample-1');
    Test5.deleteTask(0);
    Test5.addTaskToList('TaskTest_5 of Sample-2');
    Test5.deleteTask(10);
    Test5.addTaskToList('TaskTest_5 of Sample-3');
    Test5.deleteTask(0);
    Test5.addTaskToList('TaskTest_5 of Sample-3');
    Test5.onSaveList();

    const list = document.querySelectorAll('.todo-list li');
    expect(list).toHaveLength(2);
  });
});