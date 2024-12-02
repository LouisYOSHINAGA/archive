/* Koch curve */
function setup() {
    createCanvas(920, 450);  // 表示ウィンドウのサイズ設定
    background(240);         // 背景色の設定
    noLoop();                // draw関数を一度だけ実行
}

function draw() {
    reverseY();                        // y軸を上向きに取る
    kochcurve(0, 100, width, 100, 7);  // Koch曲線
    // save("koch_curve.png");
}

function reverseY() {
    translate(width/2, height/2);
    rotate(PI);
    translate(-width/2, -height/2);
}

function kochcurve(lx, ly, rx, ry, n) {  /* 左端(lx, ly)，右端(rx, ry)の線分；再帰の深さn */
    if ( n <= 0 ) {
        line(lx, ly, rx, ry);
        return ;
    }

    let dx = (rx - lx) / 3;  // 小線分x成分
    let dy = (ry - ly) / 3;  // 小線分y成分
    let cx = (lx + rx) / 2;  // 線分の中点のx座標
    let cy = (ly + ry) / 2;  // 線分の中点のy座標

    kochcurve(lx             , ly             , lx+dx          , ly+dy          , n-1);  // 左
    kochcurve(lx+dx          , ly+dy          , cx-sqrt(3)/2*dy, cy+sqrt(3)/2*dx, n-1);  // 中左
    kochcurve(cx-sqrt(3)/2*dy, cy+sqrt(3)/2*dx, rx-dx          , ry-dy          , n-1);  // 中右
    kochcurve(rx-dx          , ry-dy          , rx             , ry             , n-1);  // 右
}
