/* Recursive functions */
function setup() {
    let xs = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let s = recursive_sum(xs, 8);
    print(s);
    let p = recursive_prod(xs, 8);
    print(p);
    let f = recursive_factorial(9);
    print(f);
}

function recursive_sum(xs, n){
    if( n == 0 ){
        return xs[n];
    }
    return xs[n] + recursive_sum(xs, n-1);
}

function recursive_prod(xs, n){
    if( n == 0 ){
        return xs[n];
    }
    return xs[n] * recursive_prod(xs, n-1);
}

function recursive_factorial(n){
    if( n == 0 ){
        return 1;
    }
    return n * recursive_factorial(n-1);
}
