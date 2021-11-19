console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for (let num = 1; num <= 100; num++) {
    if (num % 2 != 0) {console.log(num);
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let i = 1; 1 <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(`${i} FIZZBUZZ`);
    } else if (i % 3 == 0) {
        console.log (`${i} FIZZ`);
    } else if (i % 5 == 0) {
        console.log (`${i} BUZZ`);
    } else {
        console.log(i);
    }   
    
}
