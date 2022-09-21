// 変数numに0〜100までのランダムな整数を代入
const num1 = Math.floor(Math.random() * 101);
const num2 = Math.floor(Math.random() * 101);

// 両方とも75点以上の場合、合格
if (num1 >= 75,num2 >= 75){
    console.log("合格");
}
else{
    console.log("不合格");
}

// 合計が140点以上の場合、合格
if (num1 + num2 >= 100){
    console.log("合格");
}
else{
    console.log("不合格");
}

/* 合計が100点以上で、どちらかの試験が90点以上であれば合格
上記以外は不合格 */
if ((num1 + num2 >= 100) & (num1 >= 90) || (num2 >= 90)){
    console.log("合格")
}
else{
    console.log("不合格")
}