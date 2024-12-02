/* Hilbert curve */
void setup() {
    size(800, 800);
    background(240);
    noLoop();
    strokeWeight(2);
}

void draw() {
    ufig(200, 200, 200, 600, 600, 600, 600, 200, 4);
}

void ufig(float ulx, float uly, float llx, float lly, float lrx, float lry, float urx, float ury, int n) {
    if ( n <= 0 ) {
        line(ulx, uly, llx, lly);
        line(llx, lly, lrx, lry);
        line(lrx, lry, urx, ury);
        return ;
    }

    float l = dist(ulx, uly, llx, lly) / 4;
    float s = ( uly < lly )? 1 : -1;

    cfig(ulx-s*l, uly+s*l, ulx+s*l, uly+s*l, ulx+s*l, uly-s*l, ulx-s*l, uly-s*l, n-1);
    ifig(ulx-s*l, uly+s*l, llx-s*l, lly-s*l, n-1);
    ufig(llx-s*l, lly-s*l, llx-s*l, lly+s*l, llx+s*l, lly+s*l, llx+s*l, lly-s*l, n-1);
    jfig(llx+s*l, lly-s*l, lrx-s*l, lry-s*l, n-1);
    ufig(lrx-s*l, lry-s*l, lrx-s*l, lry+s*l, lrx+s*l, lry+s*l, lrx+s*l, lry-s*l, n-1);
    ifig(lrx+s*l, lry-s*l, urx+s*l, ury+s*l, n-1);
    cfig(urx+s*l, ury-s*l, urx-s*l, ury-s*l, urx-s*l, ury+s*l, urx+s*l, ury+s*l, n-1);
}

void cfig(float ulx, float uly, float llx, float lly, float lrx, float lry, float urx, float ury, int n) {
    if ( n <= 0 ) {
        line(ulx, uly, llx, lly);
        line(llx, lly, lrx, lry);
        line(lrx, lry, urx, ury);
        return ;
    }

    float l = dist(ulx, uly, llx, lly) / 4;
    float s = ( llx < ulx )? 1 : -1;

    ufig(ulx-s*l, uly-s*l, ulx-s*l, uly+s*l, ulx+s*l, uly+s*l, ulx+s*l, uly-s*l, n-1);
    jfig(llx+s*l, lly-s*l, ulx-s*l, uly-s*l, n-1);
    cfig(llx+s*l, lly-s*l, llx-s*l, lly-s*l, llx-s*l, lly+s*l, llx+s*l, lly+s*l, n-1);
    ifig(lrx+s*l, lry-s*l, llx+s*l, lly+s*l, n-1);
    cfig(lrx+s*l, lry-s*l, lrx-s*l, lry-s*l, lrx-s*l, lry+s*l, lrx+s*l, lry+s*l, n-1);
    jfig(urx-s*l, ury+s*l, lrx+s*l, lry+s*l, n-1);
    ufig(urx+s*l, ury+s*l, urx+s*l, ury-s*l, urx-s*l, ury-s*l, urx-s*l, ury+s*l, n-1);
}

void ifig(float ux, float uy, float lx, float ly, int n) {
    if ( n <= 0 ) {
        line(ux, uy, lx, ly);
        return ;
    }

    float l = dist(ux, uy, lx, ly) / 4;
    float s = ( ly > uy )? 1 : -1;

    ifig(ux-s*l, uy+s*l, lx-s*l, ly-s*l, n-1);
}

void jfig(float lx, float ly, float rx, float ry, int n) {
    if ( n <= 0 ) {
        line(lx, ly, rx, ry);
        return ;
    }

    float l = dist(lx, ly, rx, ry) / 4;
    float s = ( rx > lx )? 1 : -1;

    jfig(lx+s*l, ly-s*l, rx-s*l, ry-s*l, n-1);
}
