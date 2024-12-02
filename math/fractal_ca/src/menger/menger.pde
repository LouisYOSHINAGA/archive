/* Mengar's sponge */
void setup() {
    size(800, 800, P3D);
    background(240);
    noLoop();
    noStroke();
    fill(130);
    directionalLight(255, 255, 255, 1, 1, -1);
}

void draw() {
    translate(width/2, height/2);
    rotateY(PI/3);
    sponge(700, -600, 0, 1200, 5);
    //saveFrame("sponge.png");
}

void sponge(float x, float y, float z, float l, int n) {
    if ( n <= 0 ) {
        pushMatrix();
        translate(x, y, z);
        lights();
        box(l);
        popMatrix();
        return ;
    }

    float nl = l / 3;

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
