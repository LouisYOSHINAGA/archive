/* Recursive functions */
void setup() {
    int[] xs = {1, 2, 3, 4, 5, 6, 7, 8, 9};
    int s = recursive_sum(xs, 8);
    println(s);
    int p = recursive_prod(xs, 8);
    println(p);
    int f = recursive_factorial(9);
    println(f);
}

int recursive_sum(int[] xs, int n) {
    if ( n == 0 ) {
        return xs[n];
    }
    return xs[n] + recursive_sum(xs, n-1);
}

int recursive_prod(int[] xs, int n) {
    if ( n == 0 ) {
        return xs[n];
    }
    return xs[n] * recursive_prod(xs, n-1);
}

int recursive_factorial(int n) {
    if ( n == 0 ) {
        return 1;
    }
    return n * recursive_factorial(n-1);
}
