/* Peano curve */
final int N = 0, E = 1, S = 2, W = 3;

void setup() {
    size(800, 800);
    background(240);
    noLoop();
    strokeWeight(2);
}

void draw() {
    escurve(666, 133, 533, 2);
}

void escurve(float x, float y, float l, int n) {
    if ( n <= 0 ) {
        eslines(x, y, l);
        return ;
    }

    escurve(x+l/6    , y-l/6    , l/3, n-1);
    concurve(x-l/2+l/6, y+l/6    , l/6, S, n-1);
    securve(x-l/2-l/6, y-l/6    , l/3, n-1);
    concurve(x-l+l/6  , y-l/6    , l/6, N, n-1);
    escurve(x-l+l/6  , y-l/6    , l/3, n-1);
    concurve(x-l-l/6  , y+l/6    , l/6, W, n-1);
    securve(x-l-l/6  , y+l/2-l/6, l/3, n-1);
    concurve(x-l+l/6  , y+l/2+l/6, l/6, S, n-1);
    escurve(x-l/2+l/6, y+l/2-l/6, l/3, n-1);
    concurve(x-l/2+l/6, y+l/2-l/6, l/6, N, n-1);
    securve(x-l/6    , y+l/2-l/6, l/3, n-1);
    concurve(x+l/6    , y+l/2+l/6, l/6, E, n-1);
    escurve(x+l/6    , y+l-l/6  , l/3, n-1);
    concurve(x-l/2+l/6, y+l+l/6  , l/6, S, n-1);
    securve(x-l/2-l/6, y+l-l/6  , l/3, n-1);
    concurve(x-l+l/6  , y+l-l/6  , l/6, N, n-1);
    escurve(x-l+l/6  , y+l-l/6  , l/3, n-1);
}

void eslines(float x, float y, float l) {
    line(x  , y    , x-l, y    );
    line(x-l, y    , x-l, y+l/2);
    line(x-l, y+l/2, x  , y+l/2);
    line(x  , y+l/2, x  , y+l  );
    line(x  , y+l  , x-l, y+l  );
}

void securve(float x, float y, float l, int n) {
    if ( n <= 0 ) {
        selines(x, y, l);
        return ;
    }

    securve(x-l/6    , y-l/6    , l/3, n-1);
    concurve(x+l/6    , y+l/6    , l/6, S, n-1);
    escurve(x+l/2+l/6, y-l/6    , l/3, n-1);
    concurve(x+l/2+l/6, y-l/6    , l/6, N, n-1);
    securve(x+l-l/6  , y-l/6    , l/3, n-1);
    concurve(x+l+l/6  , y+l/6    , l/6, E, n-1);
    escurve(x+l+l/6  , y+l/2-l/6, l/3, n-1);
    concurve(x+l/2+l/6, y+l/2+l/6, l/6, S, n-1);
    securve(x+l/2-l/6, y+l/2-l/6, l/3, n-1);
    concurve(x+l/6    , y+l/2-l/6, l/6, N, n-1);
    escurve(x+l/6    , y+l/2-l/6, l/3, n-1);
    concurve(x-l/6    , y+l/2+l/6, l/6, W, n-1);
    securve(x-l/6    , y+l-l/6  , l/3, n-1);
    concurve(x+l/6    , y+l+l/6  , l/6, S, n-1);
    escurve(x+l/2+l/6, y+l-l/6  , l/3, n-1);
    concurve(x+l/2+l/6, y+l-l/6  , l/6, N, n-1);
    securve(x+l-l/6  , y+l-l/6  , l/3, n-1);
}

void selines(float x, float y, float l) {
    line(x  , y    , x+l, y    );
    line(x+l, y    , x+l, y+l/2);
    line(x+l, y+l/2, x  , y+l/2);
    line(x  , y+l/2, x  , y+l  );
    line(x  , y+l  , x+l, y+l  );
}

void concurve(float x, float y, float l, int dist, int n) {
    if ( n <= 0 ) {
        conline(x, y, l, dist);
        return ;
    }

    switch( dist ) {
        case N : concurve(x+l/3, y-l/3, l/3, dist, n-1); break;
        case E : concurve(x+l/3, y+l/3, l/3, dist, n-1); break;
        case S : concurve(x+l/3, y+l/3, l/3, dist, n-1); break;
        case W : concurve(x-l/3, y+l/3, l/3, dist, n-1); break;
    }
}

void conline(float x, float y, float l, int d) {
    switch( d ) {
        case N :
        case S : line(x, y, x+l, y); break;
        case E :
        case W : line(x, y, x, y+l); break;
    }
}
