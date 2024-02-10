/**
 * 함수 타입 표현식
 */

type Operation = (a: number, b: number) => number;

const add: Operation = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const multifly: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;

/**
 * 호출 시그니처
 * (콜 시그니처)
 */

type Operation2 = {
    (a: number, b: number) : number;
    name: string; // 프로퍼티를 추가로 정의 - 하이브리드 타입
};

const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const multifly2: Operation2 = (a, b) => a * b;
const divide2: Operation2 = (a, b) => a / b;

add2(); // 함수를 호출하듯 사용
add2.name // 객체를 사용하듯 사용