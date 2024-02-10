/**
 * 인터페이스
 */

interface Person { //객체 타입 정의
    name: string;
    codingLevel?: number; //선택적 프로퍼티로 설정 가능
}

const person: Person = { //interface로 만든 타입도 타입 별칭으로 만든 타입들과 동일하게 타입 주석을 이용하여 변수의 타입을 정의할 때 사용할 수 있음
    name: "초보코딩",
    codingLevel: 5, 
}