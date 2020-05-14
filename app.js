'use strict';
const memo = new Map();
memo.set(0, 0);
memo.set(1, 1);
function trib(n) {
    if (memo.has(n)) {
        return memo.get(n);
    }
    const value = trib(n - 1) + trib(n - 2);
    memo.set(n, value);
    return value;
}
const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(trib(i));
}

/**
 * フィボナッチ数列
 * F0 = 0
 * F1 = 1
 * Fn+2 = Fn + Fn+1(n>=0)
 * 0,1,1,2,3,5,8
 * トリボナッチ数列
 * F0 = 0
 * F1 = 0
 * F2 = 1
 * Fn+3 = Fn + Fn+1 + Fn+2 (n>=0)
 * 0,0,1,1,2,4,7,13,24,44
 */

 /**
  * ToDo
  * TSファイルに変更する
  * テストを書く
  * 実装する
  */

