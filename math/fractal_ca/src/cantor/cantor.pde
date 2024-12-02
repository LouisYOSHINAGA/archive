/* Cantor set */
void setup() {
    size(1000, 400);
    background(240);
    noLoop();
    noStroke();
    fill(0);
}

void draw() {
    final float d = 100;
    cantorset(d, width-d, d, 10);
}

void cantorset(float lx, float rx, float y, int n) {
    if ( n <= 0 ) {
        return ;
    }

    final float dh = 10.0;
    float len = rx - lx;

    rect(lx, y, len, dh);
    cantorset(lx      , lx+len/3, y+2*dh, n-1);
    cantorset(rx-len/3, rx      , y+2*dh, n-1);
}
