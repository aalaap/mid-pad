/**
 * This program is free software. It comes without any warranty, to
 * the extent permitted by applicable law. You can redistribute it
 * and/or modify it under the terms of the Do What The Fuck You Want
 * To Public License, Version 2, as published by Aalaap Ghag. See
 * http://www.wtfpl.net/ for more details.
 */

'use strict';
module.exports = midPad;

function midPad(str = '', len = 0, ch = ' ') {
  // Convert `str` and `ch` to `string`
  str = str + '';
  ch = ch + '';

  // If pad length is 0, no need to pad
  if (len <= 0) return str;

  // Define padStr
  var padStr = '';

  // Pad each character
  for (var i = 0; i < str.length; i++) {
    padStr += str[i];

    if (i != (str.length - 1)) padStr += ch.repeat(len);
  }

  // Return the mid-padded sdtring
  return padStr.trim();
}
