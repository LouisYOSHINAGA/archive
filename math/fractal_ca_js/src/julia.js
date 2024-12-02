/* Julia set */
function setup() {
    createCanvas(840, 700);
    background(240);
    noLoop();
    strokeWeight(1.5);
    stroke(0);
}

function draw() {
    juliaset();
    // save("julia_set.png");
}

function juliaset() {
    let rez, imz, rec, imc;
    rec = -0.80; imc =  0.15;  // 1
    // rec = -0.59; imc =  0.43;  // 2
    // rec = -0.12; imc =  0.77;  // 3
    // rec =  0.10; imc = -0.62;  // 4
    // rec =  0.32; imc = -0.12;  // 5
    // rec = -0.74; imc =  0.06;  // 6
    // rec = -0.75; imc =  0.07;  // 7

    for ( let h = 0; h < height; h++ ) {
        imz = map(h, 0, height, 1.2, -1.2);
        for ( let w = 0; w < width; w++ ) {
            rez = map(w, 0, width, -1.6, 1.6);
            if ( isPointEscape(rez, imz, rec, imc) ) {
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
