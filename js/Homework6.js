const numbers = [90,30,20,60,50,80]

/* 2つの数字を引数として、大きい数字を返却する
関数を作成してください。 */
const bigNumber = (num1,num2) => {
    let max = num1;
    if (num2 > max) {
        max = num2;
    }
    return max;
}
console.log(bigNumber(numbers[3],numbers[5]));
console.log(bigNumber(numbers[0],numbers[4]));

/* 3つの数字を引数として、
一番大きい数字を返却する関数を作成してください。 */
const bigNumber1 = (num1,num2,num3) => {
    let max = num1;
    if (num2 > max) {
        max=num2;
    }
    if (num3 > max) {
        max = num3;
    }
    return max;
}
console.log(bigNumber1(numbers[3],numbers[5],numbers[0]));

/* 4つの数字を引数として、
一番大きい数字を返却する関数を作成してください。 */
const bigNumber2 = (num1,num2,num3,num4) => {
    let max = num1;
    if (num2 > max) {
        max = num2;
    }
    if (num3 > max) {
        max = num3;
    }
    if (num4 > max) {
        max = num4;
    }
    return max;
}
console.log(bigNumber2(numbers[3],numbers[1],numbers[4],numbers[5]));

/* 2つの数字を引数として、
小さい数字を返却する関数を作成してください。 */
const smallNumber = (num1,num2) => {
    let min = num1;
    if (num2 < min) {
        min = num2;
    }
    return min;
}
console.log(smallNumber(numbers[0],numbers[4]));

/* 3つの数字を引数として、
一番小さい数字を返却する関数を作成してください。 */
const smallNumber1 = (num1,num2,num3) => {
    let min = num1;
    if (num2 < min) {
        min = num2;
    }
    if (num3 < min) {
        min = num3;
    }
    return min;
}
console.log(smallNumber(numbers[3],numbers[2],numbers[0]));

/* 4つの数字を引数として、
一番小さい数字を返却する関数を作成してください。 */
const smallNumber2 = (num1,num2,num3,num4) => {
    let min = num1;
    if (num2 < min) {
        min = num2;
    }
    if (num3 < min) {
        min = num3;
    }
    if (num4 < min) {
        min = num4;
    }
    return min;
}
console.log(smallNumber2(numbers[0],numbers[4],numbers[3],numbers[2]));

/* 1つの数字を引数として、
その数字までの合計値を返却する関数を作成してください。 */
const totalNumber = (num1) => {
    return(num1*50)+(num1+100);
}
console.log(totalNumber(50));