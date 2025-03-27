// Copyright (c) 2025 Isaaq Simon All rights reserved
//
// Created by: Isaaq Simon
// Created on: March 2025
// This file contains the JS functions for index.html

"use strict";
/**
 * This function calculates area of a triangle.
 */
function calculate () {
  // input
  let length = parseInt(document.getElementById('length-of-rectangle').value);
  let width = parseInt(document.getElementById('width-of-rectangle').value);

  // process
  let area = length * width;
  let perimeter = 2 * (length + width);

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + area + ' cm²'
  document.getElementById('perimeter').innerHTML = 'Perimeter is: ' + perimeter + ' cm'
}