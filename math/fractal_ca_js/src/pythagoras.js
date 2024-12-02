/* Pythagoras tree */
function setup() {
    createCanvas(800, 480);
    background(240);
    noLoop();
    rectMode(CENTER);
    noStroke();
    fill(0);
}

function draw() {
    /* symmetry */
    const l = 100;
    ptree(width/2, height-l, l, PI/4, 14);
    // save("pythagoras_tree.png");
    /* asymmetry */
    // const l = 90;
    // ptree(width/2-l, height-l, l, PI/3, 14);
    // save("pythagoras_tree_asy.png");
}

function ptree(x, y, l, t, n) {
    if ( n <= 0 ) {
        return ;
    }

    const nll = l * cos(t);
    const nlr = l * cos(HALF_PI-t);

    square(x, y, l);

    push();

    // left
    translate(x-l/2, y-l/2);
    rotate(-t);
    ptree(nll/2, -nll/2, nll, t, n-1);
    rotate(t);
    // right
    translate(l, 0);
    rotate(HALF_PI-t);
    ptree(-nlr/2, -nlr/2, nlr, t, n-1);

    pop();
}
