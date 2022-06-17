const RedesSociais = [
  'Instagram', 
  'Facebook' ,
  'Youtube' ,
  'LinkedIn' ,
  'Tiktok' ,
  'Whatsapp' ,
  'Twitter' ,
];
/*
const tiktok = RedesSociais.indexOf('Tiktok'); // indexOf utiliza-se para indicar o posição no Array
console.log(tiktok); //deve mostrar o numero do indice que ela se encontra

console.log(RedesSociais.includes('Whatsapp')); // deve informar com boolean se no o parametro esta incluido no Array
*/
//Loppings

for (let i = 0; i < RedesSociais.length; i++) {
  console.log(RedesSociais[i]);
}

for (const i in RedesSociais) {
  console.log(`${i}: ${RedesSociais[i]}`); //desta forma irá mostrar todos a lista e seus respectivos indices
}