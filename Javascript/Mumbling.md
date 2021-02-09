# [Mumbling](https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/)

# Problem

This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

# Solution

```js
function accum(s) {
  // your code
  let answer = "";
  s = s.toLowerCase();

  for (x in s) {
    if (x == 0) {
      answer += s[x].toUpperCase();
    } else {
      answer += "-";
      let temp = "";

      for (let i = 0; i <= x; i++) {
        if (i == 0) {
          temp += s[x].toUpperCase();
        } else {
          temp += s[x];
        }
      }

      answer += temp;
    }
  }
  return answer;
}
```

# Sample Test

```js
Test.describe("accum", function () {
  Test.it("Basic tests", function () {
    Test.assertEquals(
      accum("ZpglnRxqenU"),
      "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
    );
    Test.assertEquals(
      accum("NyffsGeyylB"),
      "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb"
    );
    Test.assertEquals(
      accum("MjtkuBovqrU"),
      "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu"
    );
    Test.assertEquals(
      accum("EvidjUnokmM"),
      "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm"
    );
    Test.assertEquals(
      accum("HbideVbxncC"),
      "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc"
    );
  });
});
```
