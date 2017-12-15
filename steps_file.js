'use strict';
// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({
    createTodo: function(title) {
      this.fillField('What needs to be done?', title);
      this.pressKey('Enter');
    }
  });
}
