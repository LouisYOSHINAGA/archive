/* C curve */
function setup() {
    createCanvas(820, 580);
    background(240);
    noLoop();
}

function draw() {
    const dw = 180, dh = 140;
    ccurve(width/2-dw, height/2-dh, width/2+dw, height/2-dh, 16);
    // save("c_curve.png");
}

function ccurve(lx, ly, rx, ry, n) {
    if ( n <= 0 ) {
        line(lx, ly, rx, ry);
    return ;
    }

    const dx = (rx - lx) / 2;
    const dy = (ry - ly) / 2;
    const cx = (lx + rx) / 2;
    const cy = (ly + ry) / 2;

    ccurve(lx   , ly   , cx-dy, cy+dx, n-1);
    ccurve(cx-dy, cy+dx, rx   , ry   , n-1);
}
