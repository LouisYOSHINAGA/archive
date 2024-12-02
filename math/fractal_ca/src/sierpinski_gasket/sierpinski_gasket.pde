/* Sierpinski gasket */
void setup() {
    size(870, 760);   // 表示ウィンドウのサイズ設定
    background(240);  // 背景色の設定
    noLoop();         // draw関数を一度だけ実行
    noStroke();       // 図形の輪郭線なし
    fill(128);        // 図形色の設定
}

void draw() {
    float cx = width / 2;  // 正三角形の中心のx座標
    float cy = 500;        // 正三角形の中心のy座標
    float l = 480;         // 正三角形の中心から各頂点までの長さ
    gasket(cx, cy-l, cx-l*sqrt(3)/2, cy+l/2, cx+l*sqrt(3)/2, cy+l/2, 8);
}

void gasket(float tx, float ty, float lx, float ly, float rx, float ry, int n) {
    /* 上頂点(tx, ty)，左下頂点(lx, ly)，右下頂点(rx, ry)の正三角形；再帰の深さn */
    if ( n <= 0 ) {
        return ;
    }

    float lcx = (tx + lx) / 2;  // 上頂点と左下頂点の中点のx座標
    float lcy = (ty + ly) / 2;  // 上頂点と左下頂点の中点のy座標
    float rcx = (tx + rx) / 2;  // 上頂点と右下頂点の中点のx座標
    float rcy = (ty + ry) / 2;  // 上頂点と右下頂点の中点のy座標
    float bcx = (lx + rx) / 2;  // 左下頂点と右下頂点の中点のx座標
    float bcy = (ly + ry) / 2;  // 左下頂点と右下頂点の中点のy座標

    triangle(lcx, lcy, rcx, rcy, bcx, bcy);  // 中心
    gasket(tx , ty , lcx, lcy, rcx, rcy, n-1);  // 上
    gasket(lcx, lcy, lx , ly , bcx, bcy, n-1);  // 左下
    gasket(rcx, rcy, bcx, bcy, rx , ry , n-1);  // 右下
}
