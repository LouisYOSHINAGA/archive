/* Mandelbrot set */
function setup() {
    createCanvas(800, 800);
    background(240);
    noLoop();
    strokeWeight(1.5);
    stroke(0);
}

function draw() {
    mandelbrotset();
    // save("mandelbrot_set.png");
}

function mandelbrotset() {
    let rec, imc;
    for ( let h = 0; h < height; h++ ) {
        imc = map(h, 0, height, -1.0, 1.0);
        for ( let w = 0; w < width; w++ ) {
            rec = map(w, 0, width, -1.5, 0.5);
            if ( isPointEscape(0, 0, rec, imc) ) {
                point(w, h);
            }
        }
    }
}

function isPointEscape(rez, imz, rec, imc) {
    let crez, cimz;
    for ( let i = 0; i < 100; i++ ) {
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
