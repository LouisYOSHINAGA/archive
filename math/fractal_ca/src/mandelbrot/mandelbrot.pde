/* Mandelbrot set */
void setup() {
    size(800, 800);
    background(240);
    noLoop();
    stroke(0);
}

void draw() {
    mandelbrotset();
}

void mandelbrotset() {
    float rec, imc;
    for ( float h = 0; h < height; h++ ) {
        imc = map(h, 0, height, -1.0, 1.0);
        for ( float w = 0; w < width; w++ ) {
            rec = map(w, 0, width, -1.5, 0.5);
            if ( isPointEscape(0, 0, rec, imc) ) {
                point(w, h);
            }
        }
    }
}

boolean isPointEscape(float rez, float imz, float rec, float imc) {
    float crez, cimz;
    for ( int i = 0; i < 100; i++ ) {
        if ( mag(rez, imz) > 4 ) {
            return false;
        }
        crez = rez;
        cimz = imz;
        rez = sq(crez) - sq(cimz) + rec;
        imz = 2 * crez * cimz + imc;
    }
    return true;
}
