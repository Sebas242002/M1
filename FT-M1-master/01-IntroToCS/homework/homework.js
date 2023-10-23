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
   let binario = '';
   while (num > 0) {
      binario = (num % 2) + binario;
      num = Math.floor(num / 2);
   }
   return binario;
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};