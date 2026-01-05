"use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
let num = 2;
while (num <= 100) {
    let isPrime = true;
    let i = 2;
    while (i < num) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
        i++;
    }
    if (isPrime) {
        console.log(num);
    }
    num++;
}
