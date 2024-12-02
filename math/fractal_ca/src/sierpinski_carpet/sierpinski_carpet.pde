/* Sierpinski carpet */
void setup() {
    size(800, 800);   // 表示ウィンドウのサイズ設定
    background(240);  // 背景色の設定
    noLoop();         // draw関数を一度だけ実行
    noStroke();       // 図形の輪郭線なし
    fill(128);        // 図形色の設定
}

void draw() {
    carpet(0, 0, width, 7);
}

void carpet(float x, float y, float l, int n) {  /* 左上座標(x, y)，辺 lの正方形；再帰の深さn */
    if( n <= 0 ){
        return ;
    }

    float sqlen = l / 3;  // 小正方形の辺の長さ

    square(x+sqlen, y+sqlen, sqlen);  // 中心
    carpet(x        , y        , sqlen, n-1);  // 上左
    carpet(x+sqlen  , y        , sqlen, n-1);  // 上中
    carpet(x+2*sqlen, y        , sqlen, n-1);  // 上右
    carpet(x        , y+sqlen  , sqlen, n-1);  // 中左
    carpet(x+2*sqlen, y+sqlen  , sqlen, n-1);  // 中右
    carpet(x        , y+2*sqlen, sqlen, n-1);  // 下左
    carpet(x+sqlen  , y+2*sqlen, sqlen, n-1);  // 下中
    carpet(x+2*sqlen, y+2*sqlen, sqlen, n-1);  // 下右
}
