function fibonacciWithForLoop(n) {
    let previous = 0;
    let current = 1;

    for (let i = 2; 1 <= n; i++) {
        const next = previous + current;


        previous = current;
        current = next;
        console.log(current);
    }
    return current;
}
fibonacciWithForLoop(45);