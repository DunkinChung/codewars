# [Char Code Calculation](https://www.codewars.com/kata/57f75cc397d62fc93d000059)

# Problem

Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667

Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

total1 = 656667
^
total2 = 656661
^

Then return the difference between the sum of the digits in total1 and total2:

(6 + 5 + 6 + 6 + 6 + 7)

- (6 + 5 + 6 + 6 + 6 + 1)

---

                       6

# Solution

```js
function calc(x) {
  let total1 = "";
  let total2 = "";
  let num1, num2;
  let added1 = 0;
  let added2 = 0;

  for (letter in x) {
    total1 += x.charCodeAt(letter);
  }

  total2 = total1.replace(/7/g, "1");

  num1 = total1.split("");
  num2 = total2.split("");

  num1.forEach((x) => {
    added1 += parseInt(x);
  });

  num2.forEach((x) => {
    added2 += parseInt(x);
  });

  return added1 - added2;
}
```

# Sample Test

```
test.assert_equals(calc('ABC'), 6)
test.assert_equals(calc('abcdef'), 6)
test.assert_equals(calc('ifkhchlhfd'), 6)
test.assert_equals(calc('aaaaaddddr'), 30)
test.assert_equals(calc('jfmgklf8hglbe'), 6)
test.assert_equals(calc('jaam'), 12)
test.assert_equals(calc('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'), 96)
```
