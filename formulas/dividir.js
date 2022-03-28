// função normal 
// module.exports = function dividir(parametroA, parametroB){
//     if(parametroA == 0 || parametroB == 0){
//         console.log('Não se pode dividir por zero!\n');
//     }else{
//         console.log('O resultado de ' + parametroA + ' / ' + parametroB + ' é:' )
//         return (parametroA / parametroB).toFixed(3);
//     }
// }
//arrow function e if ternário
var dividir = (parametroA, parametroB) => { parametroA == 0 || parametroB == 0?
    console.log("Não se pode didivir por zero!") : 
    console.log('O resultado de ' + parametroA + ' / ' + parametroB + ' é:' + '\n' + 
    (parametroA / parametroB).toFixed(3))
}
module.exports = dividir;
