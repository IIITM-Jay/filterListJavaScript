/* The following lines of code does the following:
  1. Accepts a list of integers
  2. Emits an error message if the list is not a multiple of 10 in length
  3. Returns or prints a list of integers based on the input list, but with items at positions which are a multiple of 2 or 3 removed
*/

function filterList(inputList) {
    if (inputList.length % 10 !== 0) {
      throw new Error('Input list length must be a multiple of 10');
    }
  
    const filteredList = [];
    for (let i = 0; i < inputList.length; i++) {
        if ((i + 1) % 2 !== 0 && (i + 1) % 3 !== 0) {
            filteredList.push(inputList[i]);
        }
    }    
    return filteredList;
  }
  
  module.exports = filterList;
  