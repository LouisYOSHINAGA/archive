/* Cantor set */
function setup() {
    createCanvas(1000, 400);
    background(240);
    noLoop();
    noStroke();
    fill(0);
}

function draw() {
    const d = 100;
    cantorset(d, width-d, d, 10);
    // save("cantor_set.png");
}

function cantorset(lx, rx, y, n) {
    if ( n <= 0 ) {
        return ;
    }

    const dh = 10.0;
    let len = rx - lx;

    rect(lx, y, len, dh);
    cantorset(lx      , lx+len/3, y+2*dh, n-1);
    cantorset(rx-len/3, rx      , y+2*dh, n-1);
}
