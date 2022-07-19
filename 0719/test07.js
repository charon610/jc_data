// 객체에서 키나 값만 추출
const obj = {
    movie : 'Sunny',
    music : 'Like Sugar',
    style : 'Retro',
    price : 'Infinity'
};
const arr = Object.keys(obj); // 키만 추출
console.log('키만 추출 : ' + arr);
const arr1 = Object.values(obj); // 값만 추출
console.log(arr1);

// 객체를 배열로 변환
const arr2 = Object.entries(obj);
console.log(arr2);