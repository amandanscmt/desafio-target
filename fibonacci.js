const checkNumber = (number) => {
    let a = 0;
    let b = 1;

    while (a <= number) {
        if (a === number) {
            return true
        }
        let temp = a;
        a = b;
        b = temp + b
    }
    return false
}

let number = 10;
let checked = checkNumber(number);

if (checked) {
    console.log(`O número ${number} pertence à sequência de Fibonacci!`)
} else {
    console.log(`O número ${number} não pertence à sequência de Fibonacci.`);
}