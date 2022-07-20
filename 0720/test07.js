// ECMAScript 2015에서 비동기 처리하기 위한 Promise 객체
//- 대기중(Pending) : 아직 결과가 없는 상태
//- 이행중(Fulfiled) : 비동기 처리가 성공적으로 완료되어 약속을 이행한 상태
//- 거부됨(Rejected) : 비동기 처리가 실패한 상태

// * Promise 객체의 메소드 2가지
// 1. then(onFulfilled, onReject) : 약속이 완료 되었을 때 호출 될 함수들을 정의
// 2. catch(onReject) : 약속이 거부됐을 때 호출 될 함수들의 정의

function promiseForHomework(mustDo){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('doing homework');
            if(mustDo){
                resolve({
                    result: 'homework-result'
                });
            }else{
                reject(new Error('Too lazy'));
            }
        }, 3000);
    });
};

const promiseA = promiseForHomework(true);
console.log('promiseA created');

const promiseB = promiseForHomework();
console.log('promiseB created');

promiseA.then(v => console.log( v));
promiseB
    .then(v => console.log(v))
    .catch(e => console.error(e));