/* Hilbert curve */
function setup() {
    createCanvas(800, 800);
    background(240);
    noLoop();
    strokeWeight(2);
}

function draw() {
    ufig(200, 200, 200, 600, 600, 600, 600, 200, 4);
    // save("hilbert_curve.png");
}

function ufig(ulx, uly, llx, lly, lrx, lry, urx, ury, n) {
    if ( n <= 0 ) {
        line(ulx, uly, llx, lly);
        line(llx, lly, lrx, lry);
        line(lrx, lry, urx, ury);
        return ;
    }

    const l = dist(ulx, uly, llx, lly) / 4;
    const s = ( uly < lly )? 1 : -1;

    cfig(ulx-s*l, uly+s*l, ulx+s*l, uly+s*l, ulx+s*l, uly-s*l, ulx-s*l, uly-s*l, n-1);
    ifig(ulx-s*l, uly+s*l, llx-s*l, lly-s*l, n-1);
    ufig(llx-s*l, lly-s*l, llx-s*l, lly+s*l, llx+s*l, lly+s*l, llx+s*l, lly-s*l, n-1);
    jfig(llx+s*l, lly-s*l, lrx-s*l, lry-s*l, n-1);
    ufig(lrx-s*l, lry-s*l, lrx-s*l, lry+s*l, lrx+s*l, lry+s*l, lrx+s*l, lry-s*l, n-1);
    ifig(lrx+s*l, lry-s*l, urx+s*l, ury+s*l, n-1);
    cfig(urx+s*l, ury-s*l, urx-s*l, ury-s*l, urx-s*l, ury+s*l, urx+s*l, ury+s*l, n-1);
}

function cfig(ulx, uly, llx, lly, lrx, lry, urx, ury, n) {
    if ( n <= 0 ) {
        line(ulx, uly, llx, lly);
        line(llx, lly, lrx, lry);
        line(lrx, lry, urx, ury);
        return ;
    }

    const l = dist(ulx, uly, llx, lly) / 4;
    const s = ( llx < ulx )? 1 : -1;

    ufig(ulx-s*l, uly-s*l, ulx-s*l, uly+s*l, ulx+s*l, uly+s*l, ulx+s*l, uly-s*l, n-1);
    jfig(llx+s*l, lly-s*l, ulx-s*l, uly-s*l, n-1);
    cfig(llx+s*l, lly-s*l, llx-s*l, lly-s*l, llx-s*l, lly+s*l, llx+s*l, lly+s*l, n-1);
    ifig(lrx+s*l, lry-s*l, llx+s*l, lly+s*l, n-1);
    cfig(lrx+s*l, lry-s*l, lrx-s*l, lry-s*l, lrx-s*l, lry+s*l, lrx+s*l, lry+s*l, n-1);
    jfig(urx-s*l, ury+s*l, lrx+s*l, lry+s*l, n-1);
    ufig(urx+s*l, ury+s*l, urx+s*l, ury-s*l, urx-s*l, ury-s*l, urx-s*l, ury+s*l, n-1);
}

function ifig(ux, uy, lx, ly, n) {
    if ( n <= 0 ) {
        line(ux, uy, lx, ly);
        return ;
    }

    const l = dist(ux, uy, lx, ly) / 4;
    const s = ( ly > uy )? 1 : -1;

    ifig(ux-s*l, uy+s*l, lx-s*l, ly-s*l, n-1);
}

function jfig(lx, ly, rx, ry, n) {
    if ( n <= 0 ) {
        line(lx, ly, rx, ry);
        return ;
    }

    const l = dist(lx, ly, rx, ry) / 4;
    const s = ( rx > lx )? 1 : -1;

    jfig(lx+s*l, ly-s*l, rx-s*l, ry-s*l, n-1);
}
