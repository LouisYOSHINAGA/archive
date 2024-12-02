/* Elementary Cellular Automaton */
const SQSIZE = 8.0;  // セルの描画サイズ（定数）
let cells = [];      // セルの状態を保持する配列

function setup() {
    createCanvas(800, 400);
    noLoop();
    stroke(128);
}

function draw() {
    initCells();
    for ( let i = 0; i < height/SQSIZE; i++ ) {
        drawCells(i);
        updateCells();
    }
    // save("eca.png");
}

function initCells() {
    const cellsLength = int(width / SQSIZE);
    for ( let i = 0; i < cellsLength; i++ ) {
        cells[i] = ( i == int(cellsLength/2) )? 1 : 0;  // 中央のセルのみ1，それ以外は0で初期化
    }
}

function updateState(l, t, r) {  /* ルール150に従い，3つのセルの状態(l, t, r)から次の状態を計算 */
    const rule150 = [0, 1, 1, 0, 1, 0, 0, 1];  // ルール150における遷移後の状態を持つ配列
    let binnum = 4*l + 2*t + 1*r;              // 3つのセルの状態の列を2進数とみたときの数 [0,1,..,7]

    return rule150[binnum];
}

function updateCells() {
    let cpcells = [];  // 遷移前のセルの状態を保持する配列

    /* 遷移前のセルの状態の保存 */
    for ( let i = 0; i < cells.length; i++ ) {
        cpcells[i] = cells[i];
    }
    /* 世代更新 (全セルの状態遷移) */
    for ( let i = 0; i < cells.length; i++ ) {
        cells[i] = updateState(cpcells[(i-1+cells.length)%cells.length],
                               cpcells[i],
                               cpcells[(i+1)%cells.length]);
    }
}

function drawCells(gen) {
    for ( let i = 0; i < cells.length; i++ ) {
        fill((cells[i] == 1)? 0 : 255);        // セルの状態が1ならば黒，そうでなければ白
        square(i*SQSIZE, gen*SQSIZE, SQSIZE);  // セルの描画
    }
}
