/**
 * This program is free software. It comes without any warranty, to
 * the extent permitted by applicable law. You can redistribute it
 * and/or modify it under the terms of the Do What The Fuck You Want
 * To Public License, Version 2, as published by Aalaap Ghag. See
 * http://www.wtfpl.net/ for more details.
 */

var midPad = require("./");
var test = require("tape");

test('basic test', function (assert) {
  assert.plan(3);
  assert.strictEqual(midPad('foobar', 1, ' '), 'f o o b a r');
  assert.strictEqual(midPad('foobar', 3, ' '), 'f   o   o   b   a   r');
  assert.strictEqual(midPad('foobar', 5, ' '), 'f     o     o     b     a     r');
});

test('optionals test', function (assert) {
  assert.plan(2);
  assert.strictEqual(midPad('foobar', 1), 'f o o b a r');
  assert.strictEqual(midPad('foobar'), 'foobar');
});

test('custom test', function (assert) {
  assert.plan(1);
  assert.strictEquals(midPad('foobar', 2, '--'), 'f----o----o----b----a----r')
});
