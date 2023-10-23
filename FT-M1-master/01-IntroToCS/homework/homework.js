'use strict';

function BinarioADecimal(num) {
   const decimal = parseInt(num, 2);
   return decimal;
}
function DecimalABinario(num) {
   const binario = num.toString(2);
   return binario;
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
console.log(BinarioADecimal(10));