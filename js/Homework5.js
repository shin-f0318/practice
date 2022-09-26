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
for(let i3 = 1 ; i3<=10 ; ++i3 )
{
	sum = sum + i3;
}
console.log(sum)

// 問題2 50から100までを表示する
let num1 = 50;

while (num1 <= 100) {
    console.log(num1);
    num1 ++;
}

// 問題2 100から50までを表示する
let num2 = 100;

while (num2 >= 50) {
    console.log(num2);
    num2 --;
}

// 問題2 50から100までの和を表示する←見直し
let sum1 = 0;
let i4 = 50;
while (i4 <= 100) {
    sum1 = sum1 + i4;
    i4 ++;
    console.log(sum1);
}

/* 問題3 以下の配列を準備します。
const numbers =[40,50,20,80,95];
・この配列の数の合計を出すプログラムを作成してください。
*/
const numbers =[40,50,20,80,95];
let total = numbers.reduce((sum2, element) => sum2 + element, 0);

console.log(total);

let total2 = 0;
for(let i5 = 0;i5 < numbers.length; i5++){
    total2 = total2 + numbers[i5];
}
console.log(total2);

/* 問題4 以下の連想配列を準備します。
const personalData1 = { name: '侍太郎', age: 36, gender: '男性', address: '東京都', phoneNumber: '070-0809-1160' };
const personalData2 = { name: '侍花子', age: 20, gender: '女性', address: '京都府', phoneNumber: '999-9999-9999' };
・こちらの2つのデータから平均年齢を出すプログラムを作成してください。 */
const personalData1 = { name: '侍太郎', age: 36, gender: '男性', address: '東京都', phoneNumber: '070-0809-1160' };
const personalData2 = { name: '侍花子', age: 20, gender: '女性', address: '京都府', phoneNumber: '999-9999-9999' };

console.log(personalData1['age']);
console.log(personalData2['age']);
console.log((personalData1['age'] + personalData2['age']) / 2);

const addTwoArguments = (num1,num2) => {
    return(num1+num2)/2;
}
console.log(addTwoArguments(personalData1['age'],personalData2['age']));
