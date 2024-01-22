//void
//void -> 공허 -> 아무것도 없다.
//void -> 아무것도 없음을 의미하는 타입

function func1(): string {
    return "hello";
}

function func2(): void {
    console.log("hello");
}

//never
//never -> 존재하지 않는
//불가능한 타입

function func3(): void {
    while (true) {} //무한루프함수 void를 던지는게 모순이다.
}

function func4(): never {
    throw new Error(); //아무 값도 던지지 않는 것이 오히려 맞다.
}

let anyVar: any;

let a: never;
a = 1;
a = {};
a = "";
a = undefined;
a = null;
a = anyVar;
