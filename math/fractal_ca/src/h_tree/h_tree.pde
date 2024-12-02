/* H tree */
void setup() {
    size(880, 660);
    background(240);
    noLoop();
    strokeWeight(2);
}

void draw() {
    htree(width/4, height/2, 3*width/4, height/2, 10);
}

void htree(float lx, float ly, float rx, float ry, int n) {
    if ( n <= 0 ) {
        return ;
    }

    float dx = (rx - lx) / (2 * sqrt(2));
    float dy = (ry - ly) / (2 * sqrt(2));

    line(lx, ly, rx, ry);
    htree(lx-dy, ly-dx, lx+dy, ly+dx, n-1);
    htree(rx-dy, ry-dx, rx+dy, ry+dx, n-1);
}
