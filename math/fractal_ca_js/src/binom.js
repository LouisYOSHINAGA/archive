/* Binomial coefficients */
function setup() {
    let b = recursive_binom(5, 3);
    print(b);
}

function recursive_binom(n, k){
    if( k == 0 || k == n ){
        return 1;
    }
    return recursive_binom(n-1, k) + recursive_binom(n-1, k-1);
}
