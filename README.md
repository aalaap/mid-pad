## mid-pad

Pads each middle character of a string with supplied string.

[![Build Status][travis-image]][travis-url]

## Install

```bash
$ npm install mid-pad
```

## Usage

```js
const midPad = require('mid-pad')

midPad('foobar', 1)
// => "f o o b a r"

midPad('foobar', 2, ' ')
// => "f  o  o  b  a  r"

leftPad('foobar', 3, '--')
// => "f------o------o------b------a------r"
```

The third argument can be either a single character or a string.

[travis-image]: https://travis-ci.org/aalaap/mid-pad.svg?branch=master
[travis-url]: https://travis-ci.org/aalaap/mid-pad
