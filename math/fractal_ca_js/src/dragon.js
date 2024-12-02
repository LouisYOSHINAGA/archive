/* Dragon curve */
function setup() {
    createCanvas(800, 600);
    background(240);
    noLoop();
}

function draw() {
    dcurve(width/3.5, height/2.5, 3.2*width/4, height/2.5, 17);
    // save("dragon_curve.png");
}

function dcurve(lx, ly, rx, ry, n) {
    if ( n <= 0 ) {
        line(lx, ly, rx, ry);
        return ;
    }

    const dx = (rx - lx) / 2;
    const dy = (ry - ly) / 2;
    const cx = (lx + rx) / 2;
    const cy = (ly + ry) / 2;

    dcurve(lx, ly, cx-dy, cy+dx, n-1);
    dcurve(rx, ry, cx-dy, cy+dx, n-1);
}
