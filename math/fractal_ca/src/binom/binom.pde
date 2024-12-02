/* Binomial coefficients */
void setup() {
    int b = recursive_binom(5, 3);
    println(b);
}

int recursive_binom(int n, int k){
    if( k == 0 || k == n ){
        return 1;
    }
    return recursive_binom(n-1, k) + recursive_binom(n-1, k-1);
}
