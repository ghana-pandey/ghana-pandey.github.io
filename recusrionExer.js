"use strict";
function fib(n) {
    if (n <= 1) {
        return n;
    }
    else {
        return fib(n - 1) + fib(n - 2);
    }
}

console.log(fib(7));
function calculateFactorial(n) {
    if (n === 1) {
        return 1;
    }
    else {
        return n * calculateFactorial(n - 1);
    }
}


console.log(calculateFactorial(5));
function sumAllNumbersTillOne(n) {
    if (n === 1) {
        return 1;
    }
    else {
        return n + sumAllNumbersTillOne(n - 1);
    }
}
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printList(list) {
    console.log(list.value);
    let list = {
        value: 1,
        next: {
            value: 2,
            next: {
                value: 3,
                next: {
                    value: 4,
                    next: null
                }
            }
        }
    };

    function printList(list) {
        if (list.next) {
            printList(list.next);
        }

        console.log(list.value);
    }

    if (list.next) {
        printList(list.next);
    }
}

printList(list);