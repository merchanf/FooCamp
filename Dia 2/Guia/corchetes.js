let corchetes = ["{", "{", "}", "{"];

// Language: javascript
// write a function that takes an array of brackets and determines if the order is valid

function isValid(brackets) {
  let stack = [];
  for (let i = 0; i < brackets.length; i++) {
    if (brackets[i] === "{") {
      stack.push(brackets[i]);
    } else if (brackets[i] === "}") {
      if (stack.length === 0) {
        return false;
      } else {
        stack.pop();
      }
    }
  }
  return stack.length === 0;
}
