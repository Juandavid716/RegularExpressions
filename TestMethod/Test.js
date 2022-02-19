const re = /^learn/;

let text = "learn regular expressions";
let secondText = "write regular expressions";

console.log(re.test(text));
console.log(re.test(secondText));

// true
// false
