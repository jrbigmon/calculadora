//função normal 
// module.exports = function multiplicar(parametroA, parametroB){
//     console.log('O resultado de ' + parametroA + ' * ' + parametroB + ' é:' )
//     return parametroA * parametroB;
// }
// arrow function
var multiplicar = (parametroA, parametroB)=> {
    console.log('O resultado de ' + parametroA + ' * ' + parametroB + ' é:' )
    return parametroA * parametroB;
}
module.exports = multiplicar;