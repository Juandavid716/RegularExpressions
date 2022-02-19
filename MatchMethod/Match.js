const str = "For more information, see Chapter 3.4.5.1";
const re = /see (chapter \d+(\.\d)*)/i;
const found = str.match(re);

console.log(found);

// [
//   'see Chapter 3.4.5.1',
//   'Chapter 3.4.5.1',
//   '.1',
//   index: 22,
//   input: 'For more information, see Chapter 3.4.5.1',
//   groups: undefined
// ]

const re2 = /quick\s(brown).+?(jumps)/gi;

let text = "The Quick Brown Fox Jumps Over the Raimbow";

console.log(text.match(re2));

//[ 'Quick Brown Fox Jumps' ]

/* Nota: El match con el flag g, básicamente marca como coincidencia todo el patron de la expresión, pero si le quitamos el g
marcará como si usaramos el .exec(), es decir todos los subpatrones o coincidencias.
*/
