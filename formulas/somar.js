// função normal
// module.exports = function somar(parametroA, parametroB){
//     console.log('O resultado de ' + parametroA + ' + ' + parametroB + ' é:' )
//     return parametroA + parametroB;
// }
// arrow function
var somar = (parametroA, parametroB) => {
    console.log('O resultado de ' + parametroA + ' + ' + parametroB + ' é:' )
    return parametroA + parametroB;
}
module.exports = somar;