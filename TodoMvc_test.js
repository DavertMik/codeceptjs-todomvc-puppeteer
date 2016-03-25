
Feature('TodoMvc');

Before((I) => {
  I.amOnPage('/');
});

Scenario('create todo item', (I) => {
  I.amOnPage('/');
  I.dontSeeElement('#todo-count');
  I.fillField({model: 'newTodo'}, 'Write a guide');
  I.pressKey('Enter');
  I.see('Write a guide', {repeater: "todo in todos"});
  I.see('1 item left', '#todo-count');
});

Scenario('edit todo', (I) => {
  I.createTodo('write a review');
  I.see('write a review', {repeater: "todo in todos"});  
  I.doubleClick('write a review');
  I.pressKey(['Control', 'a']);
  I.pressKey('write old review');
  I.pressKey('Enter');
  I.see('write old review', {repeater: "todo in todos"});
});

Scenario('enter todo', (I) => {
  I.fillField({model: 'newTodo'}, 'write a new review');
  I.pressKey('Enter');
  I.createTodo('finish tests');
  I.createTodo('write blogpost');
  I.see('write a new review', {repeater: "todo in todos"});
  I.see('3 items left', '#todo-count');
});

Scenario('check todo item', (I) => {
  I.createTodo('my new item');
  I.see('1 item left', '#todo-count');
  I.checkOption({model: 'todo.completed'});
  I.see('0 items left', '#todo-count');
});

