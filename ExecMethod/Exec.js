//Match 'quick brown' followed by 'jumps',
// Remember 'brown' and 'jumps'
// Ignore case

const re = /quick\s(brown).+?(jumps)/gi;

let text = "The Quick Brown Fox Jumps Over the Raimbow";

console.log(re.exec(text));

// [
//   'Quick Brown Fox Jumps',
//   index: 4,
//   input: 'The Quick Brown Fox Jumps Over the Raimbow',
//   groups: undefined
// ]
