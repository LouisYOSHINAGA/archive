/* tree curve */
void setup() {
    size(860, 780);
    background(240);
    noLoop();
    strokeWeight(1.2);
}

void draw() {
    translate(width/2, height/2);
    rotate(3*HALF_PI);
    translate(-width/2, -height/2);

    final float g = 80, l = 160;

    /* symmetry */
    line(g, height/2, g+l, height/2);
    tcurve(g+l, height/2, l, 0, 0.7, 0.7, PI/10, 14);
    /* asymmetry */
    //final float dh = 140;
    //line(g, height/2+dh, g+l, height/2+dh);
    //tcurve(g+l, height/2+dh, l, 0, 0.8, 0.6, PI/10, 15);
}

void tcurve(float x, float y, float l, float t, float lr, float rr, float dt, int n) {
    if ( n <= 0 ) {
        return ;
    }

    // left
    line(x, y, x+l*cos(t-dt), y+l*sin(t-dt));
    tcurve(x+l*cos(t-dt), y+l*sin(t-dt), lr*l, t-dt, lr, rr, dt, n-1);
    // right
    line(x, y, x+l*cos(t+dt), y+l*sin(t+dt));
    tcurve(x+l*cos(t+dt), y+l*sin(t+dt), rr*l, t+dt, lr, rr, dt, n-1);
}
