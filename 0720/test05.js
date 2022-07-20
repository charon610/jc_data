// Set - 중복 불허
const arr = ['one', 'two', 'three', 'two', 'one', 'four'];  // 중복된 데이터 입력
const s = new Set(arr);
console.log([...s]);  // s 배열 차례대로 출력 -> 중복된 데이터 자동으로 제거