//
const timer = {
    run : function(){
        if(this.t) console.log('이미 실행된 타이머가 있음.');

        this.t = setTimeout(function(){
            console.log('3초 뒤에 실행됨');
        }, 3000);
    },
    cancel : function(){
        if(this.t) clearTimeout(this.t);
        this.t = undefined;
    }
};

timer.run();
timer.cancel();  // 앞에 실행된 timer 취소 -> 주석처리 할 경우 timer.run();이 이미 실행중이라는 메시지가 출력 됨
timer.run();