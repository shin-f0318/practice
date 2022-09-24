// 問題1 0から10までを表示する
for (let i1 = 0; i1 <= 10; i1 ++) {
    console.log(i1);
}

// 問題1 10から0までを表示する
for (let i2 = 10; i2 > -1; i2 --) {
    console.log(i2);
}

// 問題1 1から10までの和を表示する
let sum = 0;
for( i3 = 1 ; i3<=10 ; ++i3 )
{
	sum = sum + i3;
}
console.log(sum)

// 問題2 50から100までを表示する
let num1 = 49;

while (num1 <= 99) {
    num1 ++;
    console.log(num1);
}

// 問題2 100から50までを表示する
let num2 = 101;

while (num2 >= 51) {
    num2 --;
    console.log(num2);
}

// 問題2 50から100までの和を表示する←見直し
let sum1 = 50;
let i4 = 1;
while (i4 <= 100) {
    i4 ++;
    sum1= sum1 + i4;
    console.log(sum1);
}

/* 問題3 以下の配列を準備します。
const numbers =[40,50,20,80,95];
・この配列の数の合計を出すプログラムを作成してください。
*/
const numbers =[40,50,20,80,95];
let total = numbers.reduce((sum2, element) => sum2 + element, 0);

console.log(total);

/* 問題4 以下の連想配列を準備します。
const personalData1 = { name: '侍太郎', age: 36, gender: '男性', address: '東京都', phoneNumber: '070-0809-1160' };
const personalData2 = { name: '侍花子', age: 20, gender: '女性', address: '京都府', phoneNumber: '999-9999-9999' };
・こちらの2つのデータから平均年齢を出すプログラムを作成してください。 */
const personalData1 = { name: '侍太郎', age: 36, gender: '男性', address: '東京都', phoneNumber: '070-0809-1160' };
const personalData2 = { name: '侍花子', age: 20, gender: '女性', address: '京都府', phoneNumber: '999-9999-9999' };
