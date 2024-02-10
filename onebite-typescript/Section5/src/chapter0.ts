/**
 * 인터페이스
 */

interface Person { //객체 타입 정의
    readonly name: string; //읽기전용으로 설정 가능
    codingLevel?: number; //선택적 프로퍼티로 설정 가능
    sayHi: () => void; //type 표현방식
    sayHi2 () : void; //호출시그니처, 매서드의 이름이 소괄호 앞에 붙는다.
    sayHi2 (a: number, b: number) : void;
}

type Type1 = number | string | Person; //유니온 타입
type Type2 = number & string & Person; //intersection 타입


const person: Person | Person = { //interface로 만든 타입도 타입 별칭으로 만든 타입들과 동일하게 타입 주석을 이용하여 변수의 타입을 정의할 때 사용할 수 있음
    name: "초보코딩",
    sayHi: function () { //함수(메서드) 삽입 가능
        console.log("Hi~")
    },
    sayHi2: function () {
        console.log("HiHi~~")
    }
}

person.name = "홍길동"; //위에서 읽기전용으로 설정했으므로 에러

