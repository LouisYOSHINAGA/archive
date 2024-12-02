/* Pythagoras tree */
void setup() {
    size(800, 480);
    background(240);
    noLoop();
    rectMode(CENTER);
    noStroke();
    fill(0);
}

void draw() {
    /* symmetry */
    final float l = 100;
    ptree(width/2, height-l, l, PI/4, 14);
    /* asymmetry */
    //final float l = 90;
    //ptree(width/2-l, height-l, l, PI/3, 14);
}

void ptree(float x, float y, float l, float t, int n) {
    if ( n <= 0 ) {
        return ;
    }

    float nll = l * cos(t);
    float nlr = l * cos(HALF_PI-t);

    square(x, y, l);
    pushMatrix();

    // left
    translate(x-l/2, y-l/2);
    rotate(-t);
    ptree(nll/2, -nll/2, nll, t, n-1);
    rotate(t);
    // right
    translate(l, 0);
    rotate(HALF_PI-t);
    ptree(-nlr/2, -nlr/2, nlr, t, n-1);

    popMatrix();
}
