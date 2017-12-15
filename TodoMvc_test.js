
Feature('TodoMvc');

Before((I) => {
  I.amOnPage('/');
});

Scenario('create todo item', (I) => {
  I.dontSeeElement('.todo-count');
  I.fillField('What needs to be done?', 'Write a guide');
  I.pressKey('Enter');
  I.see('Write a guide', '.todo-list');
  I.see('1 item left', '.todo-count');
});

Scenario('edit todo', (I) => {
  I.createTodo('write a review');
  I.see('write a review', '.todo-list');  
  I.doubleClick('write a review');
  I.pressKey(['Control', 'a']);
  I.fillField({css: ':focus'}, 'write old review');
  I.pressKey('Enter');
  I.see('write old review', '.todo-list');
});

Scenario('enter todo', (I) => {
  I.fillField('What needs to be done?', 'write a new review');
  I.pressKey('Enter');
  I.createTodo('finish tests');
  I.createTodo('write blogpost');
  I.see('write a new review', '.todo-list');
  I.see('3 items left', '.todo-count');
});

Scenario('check todo item', (I) => {
  within('.todoapp', () => {
    I.createTodo('my new item');
    I.see('1 item left', '.todo-count');
    I.click('.todo-list input.toggle');
  });
  I.see('0 items left', '.todo-count');
});

const assert = require('assert');
Scenario('get value of current tasks', async (I) => {
  I.createTodo('do 1');
  I.createTodo('do 2');
  let numTodos = await I.grabTextFrom('.todo-count strong');  
  assert.equal(2, numTodos);
});


