/** Validador de número de telefone
 * Retorna true se a string fornecida se parece com um número telefônico dos Estados Unidos válido.
 * 555-555-5555
 * (555)555-5555
 * (555) 555-5555
 * 555 555 5555
 * 5555555555
 * 1 555 555 5555
 */
function telephoneCheck(str) {
  let rule = /^1?\s?\(\d\d\d\)-?\s?\d\d\d-?\s?\d\d\d\d$|^1?\s?\d\d\d\-?\s?\d\d\d-?\s?\d\d\d\d$/
  return rule.test(str);
}
console.log(telephoneCheck("555-555-5555"));//true
console.log(telephoneCheck("1 (555) 555-5555"));//true
console.log(telephoneCheck("(555)555-5555"));//true
console.log(telephoneCheck("1(555)555-5555"));//true
console.log(telephoneCheck("1 456 789 4444"));//true
console.log(telephoneCheck("123**&!!asdf#"));//false
console.log(telephoneCheck("55555555"));//false
console.log(telephoneCheck("(6054756961)"));//false
console.log(telephoneCheck("2 (757) 622-7382"));//false
