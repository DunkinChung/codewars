# [Beginner Series #3 Sum of Numbers](https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript)

# Problem

Given two integers a and b, which can be positive or negative, find the sum of all the integers between including them too and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

# Solution

```js
function getSum(a, b) {
  let top_bound;
  if (a == b) {
    return a;
  } else if (a < b) {
    x = a;
    top_bound = b;
  } else {
    x = b;
    top_bound = a;
    console.log(x, top_bound);
  }
  sum = x;
  while (x < top_bound) {
    sum += x + 1;
    x++;
  }
  return sum;
}
```

# Sample Test

```js
Test.describe("Basic Tests:", function () {
  Test.assertEquals(getSum(0, -1), -1);
  Test.assertEquals(getSum(0, 1), 1);
});
```
