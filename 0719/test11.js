const str = 'To lose your path is the way to find that path';

const sensitiveCaseRegex = /to/;
const ignoreAllCaseRegex = /to/gi;
const findRangeRegex = /([a-f])\w+/i;
const findAllRangeRegex = /([a-f])\w+/gi;

console.log(str.match(sensitiveCaseRegex));
console.log(str.match(ignoreAllCaseRegex));
console.log(str.match(findRangeRegex));
console.log(str.match(findAllRangeRegex));

// i플래그 : 대소문자는 구분은 무시

// [a-f] : a부터 f사이의 문자를 찾는 range표현식

// w+ : 해당문자로 시작해서 공백이 나타날때까지 단어를 반환

// g : 모든 단어를 찾음, 만일 g가 없으면 일치하는 문자만 찾음
