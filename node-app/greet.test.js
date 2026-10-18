const test = require('node:test');
const assert = require('node:assert');
const { greet } = require('./greet');

test('greet says hello to the name it is given', () => {
  assert.strictEqual(greet('Jason'), 'Hello, Jason!');
});
