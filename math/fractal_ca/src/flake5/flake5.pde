/* Pentaflake */
void setup() {
    size(800, 800);
    background(240);
    noLoop();
    noStroke();
    fill(0);
}

void draw() {
    translate(width/2, height/2);
    rotate(-HALF_PI);
    pentaflake(-20, 0, 380, 6);
}

void pentaflake(float x, float y, float l, int n) {
    if ( n <= 0 ) {
        polygon(x, y, l, 5);
        return ;
    }

    float ol = l / (1 + 2*cos(PI/5));
    float il = cos(PI/5) * ol;

    pushMatrix();
    translate(x, y);
    rotate(PI);
    pentaflake(0, 0, ol, n-1);
    popMatrix();
    for ( float t = 0; t < TWO_PI; t += TWO_PI/5) {
        pentaflake(x+2*il*cos(t), y+2*il*sin(t), ol, n-1);
    }
}

void polygon(float x, float y, float l, int n) {
    beginShape();
    for ( float t = 0; t < TWO_PI; t += TWO_PI/n ) {
        vertex(x+l*cos(t), y+l*sin(t));
    }
    endShape(CLOSE);
}
