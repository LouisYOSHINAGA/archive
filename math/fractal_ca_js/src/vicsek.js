/* Vicsek fractal */
function setup() {
    createCanvas(800, 800);
    background(240);
    noLoop();
    noStroke();
    fill(0);
}

function draw() {
    vfractalc(0, 0, width, 6);
    // save("vicsek_fractal_cross.png");
    // vfractalx(0, 0, width, 6);
    // save("vicsek_fractal_saltire.png");
}

function vfractalc(x, y, l, n) {
    if ( n <= 0 ) {
        square(x, y, l);
        return ;
    }

    const nl = l / 3;

    vfractalc(x+nl  , y     , nl, n-1);
    vfractalc(x     , y+nl  , nl, n-1);
    vfractalc(x+nl  , y+nl  , nl, n-1);
    vfractalc(x+2*nl, y+nl  , nl, n-1);
    vfractalc(x+nl  , y+2*nl, nl, n-1);
}

function vfractalx(x, y, l, n) {
    if ( n <= 0 ) {
        square(x, y, l);
        return ;
    }

    const nl = l / 3;

    vfractalx(x     , y     , nl, n-1);
    vfractalx(x+2*nl, y     , nl, n-1);
    vfractalx(x+nl  , y+nl  , nl, n-1);
    vfractalx(x     , y+2*nl, nl, n-1);
    vfractalx(x+2*nl, y+2*nl, nl, n-1);
}
