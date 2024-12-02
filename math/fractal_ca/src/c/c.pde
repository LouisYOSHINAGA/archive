/* C curve */
void setup() {
    size(820, 580);
    background(240);
    noLoop();
}

void draw() {
    final float dw = 180, dh = 140;
    ccurve(width/2-dw, height/2-dh, width/2+dw, height/2-dh, 16);
}

void ccurve(float lx, float ly, float rx, float ry, float n) {
    if ( n <= 0 ) {
        line(lx, ly, rx, ry);
        return ;
    }

    float dx = (rx - lx) / 2;
    float dy = (ry - ly) / 2;
    float cx = (lx + rx) / 2;
    float cy = (ly + ry) / 2;

    ccurve(lx   , ly   , cx-dy, cy+dx, n-1);
    ccurve(cx-dy, cy+dx, rx   , ry   , n-1);
}
