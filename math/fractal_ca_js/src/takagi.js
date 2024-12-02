/* Takagi curve */
let ys;  // 各点の高さを格納する配列

function setup() {
    createCanvas(860, 620);  // 表示ウィンドウのサイズ設定
    background(240);         // 背景色の設定
    noLoop();                // draw関数を一度だけ実行
    strokeWeight(1.6);       // 輪郭線の太さの設定
}

function draw() {
    reverseY();                 // y軸を上向きに取る
    initPoints();               // 配列ysの初期化
    takagicurve(0, width, 10);  // 高木曲線
    plot();                     // 曲線のプロット
    // save("takagi_curve.png");
}

function reverseY() {
    translate(width/2, height/2);
    rotate(PI);
    translate(-width/2, -height/2);
}

function initPoints() {
    ys = [];
    for ( let x = 0; x < width; x++ ) {
        ys[x] = 0;  // 各点の高さを0で初期化
    }
}

function takagicurve(lx, rx, n) {  /* 区間[lx, rx]，再帰の深さn */
    if( n <= 0 ){
        return ;
    }

    let cx = int((lx + rx) / 2);  // 区間の中点
    let y = 0;                    // 三角波の高さ

    // 三角波の足し合わせ
    for ( let x = lx; x < cx; x++ ) {
        ys[x] += y++;
    }
    for ( let x = cx; x < rx; x++ ) {
        ys[x] += y--;
    }
    takagicurve(lx, cx, n-1);  // 左
    takagicurve(cx, rx, n-1);  // 右
}

function plot() {
    for ( let x = 0; x < ys.length-1; x++ ) {
        line(x, ys[x], x+1, ys[x+1]);
    }
}
