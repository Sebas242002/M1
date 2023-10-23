'use strict';

function BinarioADecimal(num) {
   let decimal = 0
   for (let i = 0; i < num.length; i++) {
      const bit = Number(num.charAt(i));
      const posicion = num.length -i -1;
      decimal += bit * Math.pow(2, posicion);
   } 
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