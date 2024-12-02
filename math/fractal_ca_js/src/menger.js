/* Mengar's sponge */
function setup() {
    createCanvas(800, 800, WEBGL);
    background(240);
    noLoop();
    noStroke();
    fill(200);
}

function draw() {
    rotateY(PI/3);
    sponge(700, -600, 0, 1200, 5);
    // save("sponge.png");
}

function sponge(x, y, z, l, n) {
    if ( n <= 0 ) {
        push();
        translate(x, y, z);
        directionalLight(255, 255, 255, -1, 1, -1);
        box(l);
        pop();
        return ;
    }

    let nl = l / 3;

    // front
    sponge(x, y, z, nl, n-1);
    sponge(x+nl, y, z, nl, n-1);
    sponge(x+2*nl, y, z, nl, n-1);

    sponge(x, y+nl, z, nl, n-1);
    sponge(x+2*nl, y+nl, z, nl, n-1);

    sponge(x, y+2*nl, z, nl, n-1);
    sponge(x+nl, y+2*nl, z, nl, n-1);
    sponge(x+2*nl, y+2*nl, z, nl, n-1);

    // center
    sponge(x, y, z-nl, nl, n-1);
    sponge(x+2*nl, y, z-nl, nl, n-1);

    sponge(x, y+2*nl, z-nl, nl, n-1);
    sponge(x+2*nl, y+2*nl, z-nl, nl, n-1);

    // back
    sponge(x, y, z-2*nl, nl, n-1);
    sponge(x+nl, y, z-2*nl, nl, n-1);
    sponge(x+2*nl, y, z-2*nl, nl, n-1);

    sponge(x, y+nl, z-2*nl, nl, n-1);
    sponge(x+2*nl, y+nl, z-2*nl, nl, n-1);

    sponge(x, y+2*nl, z-2*nl, nl, n-1);
    sponge(x+nl, y+2*nl, z-2*nl, nl, n-1);
    sponge(x+2*nl, y+2*nl, z-2*nl, nl, n-1);
}
