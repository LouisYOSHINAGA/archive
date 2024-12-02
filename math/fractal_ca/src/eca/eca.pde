/* Elementary Cellular Automaton */
final float SQSIZE = 8.0;  // セルの描画サイズ（定数）
int[] cells;               // セルの状態を保持する配列

void setup() {
    size(800, 400);
    noLoop();
    stroke(128);
}

void draw() {
    initCells();
    for ( int i = 0; i < height/SQSIZE; i++ ) {
        drawCells(i);
        updateCells();
    }
}

void initCells() {
    cells = new int[(int)(width/SQSIZE)];
    for ( int i = 0; i < cells.length; i++ ) {
        cells[i] = ( i == cells.length/2 )? 1 : 0;  // 中央のセルのみ1，それ以外は0で初期化
    }
}

int update(int l, int t, int r) {  /* ルール150に従い，3つのセルの状態(l, t, r)から次の状態を計算 */
    int[] rule150 = {0, 1, 1, 0, 1, 0, 0, 1};  // ルール150における遷移後の状態を持つ配列
    int binnum = 4*l + 2*t + 1*r;              // 3つのセルの状態の列を2進数とみたときの数 [0,1,..,7]

    return rule150[binnum];
}

void updateCells() {
    int[] cpcells = new int[cells.length];  // 遷移前のセルの状態を保持する配列

    /* 遷移前のセルの状態の保存 */
    for ( int i = 0; i < cells.length; i++ ) {
        cpcells[i] = cells[i];
    }
    /* 世代更新 (全セルの状態遷移) */
    for ( int i = 0; i < cells.length; i++ ) {
        cells[i] = update(cpcells[(i-1+cells.length)%cells.length],
                          cpcells[i],
                          cpcells[(i+1)%cells.length]);
    }
}

void drawCells(int gen) {
    for ( int i = 0; i < cells.length; i++ ) {
        fill((cells[i] == 1)? 0 : 255);        // セルの状態が1ならば黒，そうでなければ白
        square(i*SQSIZE, gen*SQSIZE, SQSIZE);  // セルの描画
    }
}
