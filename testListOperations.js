/* Test Cases to test the written program 
  1. Valid output on valid input
  2. If the list length is not a multiple of 10
  3. Empty list
*/

const assert = require('assert');
const filterList = require('./listOperations');

// Test Case 1: Valid input list
const inputList1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
console.log('Input List 1:', inputList1);

// Manually calculated expected output based on the provided OCaml program
const expectedFilteredList1 = [1, 5, 7, 11, 13, 17, 19, 23, 25,29];

const filteredList1 = filterList(inputList1);
console.log('Filtered List 1:', filteredList1);

// Assert with manually entered expected output
assert.deepStrictEqual(filteredList1, expectedFilteredList1);


// Test Case 2: Invalid input list (not a multiple of 10)
const inputList2 = Array.from({ length: 25 }, (_, index) => index + 1);
console.log('Input List 2:', inputList2);
try {
    // Calculate the input list length
    const inputListLength2 = inputList2.length;
  
    // Check if the input list length is not a multiple of 10
    if (inputListLength2 % 10 !== 0) {
      throw new Error('Input list length must be a multiple of 10');
    }
  
    // Proceed with filtering if the length is valid
    const filteredList2 = filterList(inputList2);
    console.error('Test Case 2: Unexpected success. Filtered List:', filteredList2);
  } catch (error) {
    // Catch the error and print the error message
    console.log('Test Case 2:', error.message);
  
    // Assert the error message
    assert.strictEqual(error.message, 'Input list length must be a multiple of 10');
  }

// Test Case 3: Valid input list with 0 elements
const inputList3 = [];
console.log('Input List 3:', inputList3);
const filteredList3 = filterList(inputList3);
console.log('Filtered List 3:', filteredList3);
assert.deepStrictEqual(filteredList3, []);

// Test Case 4: Valid input list with only elements at positions multiple of 2 and 3
const inputList4 =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('Input List 4:', inputList4);
const filteredList4 = filterList(inputList4);
console.log('Filtered List 4:', filteredList4);
assert.deepStrictEqual(filteredList4, [1, 5, 7]);

console.log('All tests passed!');
