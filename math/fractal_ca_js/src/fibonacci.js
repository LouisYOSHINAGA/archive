/* Fibonacci */
function setup() {
    let f = recursive_fib(10);
    print(f);
}

function recursive_fib(n){
    if( n == 0 || n == 1 ){
        return 1;
    }
    return recursive_fib(n-1) + recursive_fib(n-2);
}
