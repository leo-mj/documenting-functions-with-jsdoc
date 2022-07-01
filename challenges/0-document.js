// TODO (Ex.0): document and write tests for this function
/**
 * Returns the negative version of a number
 * @param {number} n - the number of which to return the negative
 * 
 * @returns {number} - the negative version of n
 */
function asNegative(n) {
  if (n > 0) {
    return -n;
  }
  return n;
}

// test cases:
console.log("as Negative(1): ", asNegative(1), "is the actual return. Expected: -1");
console.log("as Negative(0): ", asNegative(0), "is the actual return. Expected: 0");
console.log("as Negative(-1): ", asNegative(-1), "is the actual return. Expected: -1");


