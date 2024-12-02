/* Dragon curve */
void setup() {
    size(800, 600);
    background(240);
    noLoop();
}

void draw() {
    dcurve(width/3.5, height/2.5, 3.2*width/4, height/2.5, 17);
}

void dcurve(float lx, float ly, float rx, float ry, int n) {
    if ( n <= 0 ) {
        line(lx, ly, rx, ry);
        return ;
    }

    float dx = (rx - lx) / 2;
    float dy = (ry - ly) / 2;
    float cx = (lx + rx) / 2;
    float cy = (ly + ry) / 2;

    dcurve(lx, ly, cx-dy, cy+dx, n-1);
    dcurve(rx, ry, cx-dy, cy+dx, n-1);
}
