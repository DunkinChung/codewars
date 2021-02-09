# [Sum of two lowest positive integers](https://www.codewars.com/kata/558fc85d8fd1938afb000014/)

# Problem

Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.

# Solution

```js
function sumTwoSmallestNumbers(numbers) {
  //Code here
  let num1 = Number.MAX_SAFE_INTEGER;
  let num2 = Number.MAX_SAFE_INTEGER;

  numbers.forEach((x) => {
    console.log(x);
    if (x < num1 && x < num2) {
      if (num1 < num2) {
        num2 = x;
      } else {
        num1 = x;
      }
    } else if (x < num1 || x < num2) {
      if (num1 < num2) {
        num2 = x;
      } else {
        num1 = x;
      }
    }
  });
  return num1 + num2;
}
```

# Sample Test

```js
const chai = require("chai");
const assert = chai.assert;

describe("Your function", function () {
  it("should work for basic tests", function () {
    assert.strictEqual(
      sumTwoSmallestNumbers([5, 8, 12, 19, 22]),
      13,
      "Sum should be 13"
    );
    assert.strictEqual(
      sumTwoSmallestNumbers([15, 28, 4, 2, 43]),
      6,
      "Sum should be 6"
    );
    assert.strictEqual(
      sumTwoSmallestNumbers([3, 87, 45, 12, 7]),
      10,
      "Sum should be 10"
    );
    assert.strictEqual(
      sumTwoSmallestNumbers([23, 71, 33, 82, 1]),
      24,
      "Sum should be 24"
    );
    assert.strictEqual(
      sumTwoSmallestNumbers([52, 76, 14, 12, 4]),
      16,
      "Sum should be 16"
    );
  });
});
```
