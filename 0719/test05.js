// 배열의 요소를 일괄 변경하기
const arr=[
    {id : 0, name : '혜림', age:6},
    {id : 1, name : '현일', age:3},
    {id : 2, name : '현아', age:5},
    {id : 3, name : '유림', age:2}
]

const arr2 = arr.map(el => {
    el.age = el.age + 1;
    return el.age;
});

const arr3 = arr.map(el => el.name);
console.log(arr2);
console.log(arr3);