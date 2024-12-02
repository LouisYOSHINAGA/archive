/* Koch snowflake */
void setup() {
    size(860, 860);
    background(240);
    noLoop();
}

void draw() {
    final float l = 400.0;
    kochsnowflake(width/2, height/2, l);
}

void kochsnowflake(float x, float y, float l) {
    final float dt = TWO_PI/3;

    pushMatrix();
    translate(x, y);
    float t = HALF_PI;
    for ( int i = 0; i < 3; i++ ) {
        kochcurve(l*cos(t), l*sin(t), l*cos(t-dt), l*sin(t-dt), 7);
        t += dt;
    }
    popMatrix();
}

void kochcurve(float lx, float ly, float rx, float ry, int n) {
    if ( n <= 0 ) {
        line(lx, ly, rx, ry);
        return ;
    }

    final float c = sqrt(3) / 2;
    float dx = (rx - lx) / 3;
    float dy = (ry - ly) / 3;
    float cx = (lx + rx) / 2;
    float cy = (ly + ry) / 2;

    kochcurve(lx     , ly     , lx+dx  , ly+dy  , n-1);
    kochcurve(lx+dx  , ly+dy  , cx-c*dy, cy+c*dx, n-1);
    kochcurve(cx-c*dy, cy+c*dx, rx-dx  , ry-dy  , n-1);
    kochcurve(rx-dx  , ry-dy  , rx     , ry     , n-1);
}
