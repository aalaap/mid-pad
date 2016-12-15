/* This program is free software. It comes without any warranty, to
     * the extent permitted by applicable law. You can redistribute it
     * and/or modify it under the terms of the Do What The Fuck You Want
     * To Public License, Version 2, as published by Sam Hocevar. See
     * http://www.wtfpl.net/ for more details. */
var midPad = require("./");
var test = require("tape");

test('simple test', function (assert) {
  assert.plan(1);
  assert.strictEqual(leftPad('foobar', 1, ' '), 'f o o b a r');
});

