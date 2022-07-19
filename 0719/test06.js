// 배열 내 값 누적 - reduce
const numArr = [1,2,3,4,5];

const result = numArr.reduce((acc, el) =>{
    return acc + el
}, 0);  // 0은 초기값

console.log(result);