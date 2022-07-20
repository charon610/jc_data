// 배열 내 값 누적 - reduce
const numArr = [1,2,3,4,5];

const result = numArr.reduce((acc, el) =>{ // acc는 누적 값, el은 현재요소 값
    return acc + el
}, 0);  // 0은 초기 값

console.log(result);