// função normal
// module.exports = function subtrair(parametroA, parametroB){
//     console.log('O resultado de ' + parametroA + ' - ' + parametroB + ' é:' )
//     return parametroA - parametroB;
// }
// arrow function
var subtrair = (parametroA, parametroB) => {
    console.log('O resultado de ' + parametroA + ' - ' + parametroB + ' é:' )
    return parametroA - parametroB;
}
module.exports = subtrair;