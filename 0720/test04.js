// 배열 요소 확인 - has()
const s = new Set();

s.add('one');
s.add('two');
s.add('three');

console.log(s); // s 출력
console.log(s.has('one'));  // one 찾기
s.delete('one'); // one 삭제
console.log(s.has('one'));  // false
console.log(s.has('two'));
console.log(s);  // s 출력(one 삭제 확인)