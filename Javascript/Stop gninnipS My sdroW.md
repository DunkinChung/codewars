# [Stop gninnipS My sdroW!](https://www.codewars.com/kata/5264d2b162488dc400000001)

# Problem

Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

# Solution

```js
function spinWords(str) {
  //TODO Have fun :)

  let output = "";

  words = str.split(" ");
  for (x in words) {
    if (x > 0) {
      output += " ";
    }
    if (words[x].length >= 5) {
      for (index = words[x].length; index >= 0; index--) {
        output += words[x].charAt(index);
      }
    } else {
      output += words[x];
    }
  }
  return output;
}
```

# Sample Test

```js
test.assert_equals(spin_words("Welcome"), "emocleW");
```
