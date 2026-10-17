const { test } = require('node:test');
const assert = require('node:assert');
const fs = require('fs');

test('server file exists', () => {
  assert.strictEqual(fs.existsSync('./server.js'), true);
});

test('package.json exists', () => {
  assert.strictEqual(fs.existsSync('./package.json'), true);
});

test('basic math works', () => {
  assert.strictEqual(2 + 2, 4);
});
