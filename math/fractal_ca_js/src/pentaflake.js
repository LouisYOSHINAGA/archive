/* Pentaflake */
function setup() {
    createCanvas(800, 800);
    background(240);
    noLoop();
    noStroke();
    fill(0);
}

function draw() {
    translate(width/2, height/2+20);
    rotate(-PI/10);
    pentaflake(0, 0, 380, 5);
    // save("pentaflake.png");
}

function pentaflake(x, y, l, n){
    if( n <= 0 ){
        polygon(x, y, l, 5);
        return ;
    }

    let ol = l / (1 + 2*cos(PI/5));
    let il = cos(PI/5) * ol;

    push();
    translate(x, y);
    rotate(PI);
    pentaflake(0, 0, ol, n-1);
    pop();
    for( let t = 0; t < TWO_PI; t += TWO_PI/5 ){
        pentaflake(x+2*il*cos(t), y+2*il*sin(t), ol, n-1);
    }
}

function polygon(x, y, l, n){
    beginShape();
    for( let t = 0; t < TWO_PI; t += TWO_PI/n){
        vertex(x+l*cos(t), y+l*sin(t));
    }
    endShape(CLOSE);
}
