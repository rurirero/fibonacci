'use strict';
/*
function fib (n) {
    if (n === 0) {
        return 0;
    }else if (n===1) {
        return 1;
    }
    return fib(n-1) + fib(n - 2);
}
const length = 40;
    for (let i = 0;i <= length; i++){
        console.log(fib(i))
    };
*/
const memo = new Map();
memo.set(1,1);
memo.set(0,0);
function fib(n) {
    if (memo.has(n)) {
        return memo.get(n);
    }
    const valune = fib(n - 1)+fib(n - 2);
    memo.set(n,valune);
    return valune;
};
const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(fib(i));
};