/* Peano curve */
const N = 0, E = 1, S = 2, W = 3;

function setup() {
    createCanvas(800, 800);
    background(240);
    noLoop();
    strokeWeight(2);
}

function draw() {
    escurve(666, 133, 533, 2);
    // save("peano_curve.png")
}

function escurve(x, y, l, n) {
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

function eslines(x, y, l) {
    line(x  , y    , x-l, y    );
    line(x-l, y    , x-l, y+l/2);
    line(x-l, y+l/2, x  , y+l/2);
    line(x  , y+l/2, x  , y+l  );
    line(x  , y+l  , x-l, y+l  );
}

function securve(x, y, l, n) {
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

function selines(x, y, l) {
    line(x  , y    , x+l, y    );
    line(x+l, y    , x+l, y+l/2);
    line(x+l, y+l/2, x  , y+l/2);
    line(x  , y+l/2, x  , y+l  );
    line(x  , y+l  , x+l, y+l  );
}

function concurve(x, y, l, dist, n) {
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

function conline(x, y, l, d) {
    switch( d ) {
        case N :
        case S : line(x, y, x+l, y); break;
        case E :
        case W : line(x, y, x, y+l); break;
    }
}
