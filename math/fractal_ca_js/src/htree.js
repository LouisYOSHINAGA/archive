/* H tree */
function setup() {
    createCanvas(880, 660);
    background(240);
    noLoop();
    strokeWeight(2);
}

function draw() {
    htree(width/4, height/2, 3*width/4, height/2, 10);
    // save("h_tree.png");
}

function htree(lx, ly, rx, ry, n) {
    if ( n <= 0 ) {
        return ;
    }

    const dx = (rx - lx) / (2 * sqrt(2));
    const dy = (ry - ly) / (2 * sqrt(2));

    line(lx, ly, rx, ry);
    htree(lx-dy, ly-dx, lx+dy, ly+dx, n-1);
    htree(rx-dy, ry-dx, rx+dy, ry+dx, n-1);
}
