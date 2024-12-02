/* Hexaflake */
void setup() {
    size(800, 800);
    background(240);
    noLoop();
    noStroke();
    fill(0);
}

void draw() {
    hexaflake(width/2, height/2, 380, 5);
}

void hexaflake(float x, float y, float l, int n) {
    if ( n <= 0 ) {
        polygon(x, y, l, 6);
        return ;
    }

    hexaflake(x, y, l/3, n-1);
    for ( float t = 0; t < TWO_PI; t += TWO_PI/6 ) {
        hexaflake(x+2*l/3*cos(t), y+2*l/3*sin(t), l/3, n-1);
    }
}

void polygon(float x, float y, float l, int n) {
    beginShape();
    for ( float t = 0; t < TWO_PI; t += TWO_PI/n ) {
        vertex(x+l*cos(t), y+l*sin(t));
    }
    endShape(CLOSE);
}
