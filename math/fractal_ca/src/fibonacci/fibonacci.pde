/* Fibonacci */
void setup() {
    int f = recursive_fib(10);
    println(f);
}

int recursive_fib(int n){
    if( n == 0 || n == 1 ){
        return 1;
    }
    return recursive_fib(n-1) + recursive_fib(n-2);
}
