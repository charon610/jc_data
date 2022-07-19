// JSON 형태로 출력
const testStringify = {
    stringfileNum : JSON.stringify(13,1),
    stringfileStr : JSON.stringify('Carnival'),
    stringfileBln : JSON.stringify(false),
    stringfileArr : JSON.stringify([2021, 2022])
};

for (let key in testStringify){
    console.log(`--------${key}---------`);
    console.log(typeof testStringify[key]);
    console.log(testStringify[key]);
}