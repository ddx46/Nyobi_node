'use strict';
const num = process.argv[2] || 0; //引数はnodeから受け取る
let sum = 0;
for ( let i = 0; i<= num; i++){
    sum = sum + i;
}
console.log(sum);
