/* Koch snowflake */
function setup() {
    createCanvas(860, 860);
    background(240);
    noLoop();
}

function draw() {
    const l = 400.0;
    kochsnowflake(width/2, height/2, l);
    // save("koch_snowflake.png");
}

function kochsnowflake(x, y, l) {
    const dt = TWO_PI/3;

    push();
    translate(x, y);

    let t = HALF_PI;
    for ( let i = 0; i < 3; i++ ) {
        kochcurve(l*cos(t), l*sin(t), l*cos(t-dt), l*sin(t-dt), 7);
        t += dt;
    }

    pop();
}

function kochcurve(lx, ly, rx, ry, n) {
    if ( n <= 0 ) {
        line(lx, ly, rx, ry);
        return ;
    }

    const c = sqrt(3) / 2;
    const dx = (rx - lx) / 3;
    const dy = (ry - ly) / 3;
    const cx = (lx + rx) / 2;
    const cy = (ly + ry) / 2;

    kochcurve(lx     , ly     , lx+dx  , ly+dy  , n-1);
    kochcurve(lx+dx  , ly+dy  , cx-c*dy, cy+c*dx, n-1);
    kochcurve(cx-c*dy, cy+c*dx, rx-dx  , ry-dy  , n-1);
    kochcurve(rx-dx  , ry-dy  , rx     , ry     , n-1);
}
