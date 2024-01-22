/**
 * 기본 타입간의 호환성
 */

let num1: number = 10;
let num2: 10 = 10;

num1 = num2;

/**
 * 객체 타입간의 호환성
 */

type Animal = {
    name: string;
    color: string;
};

type Dog = {
    name : string;
    color: string;
    breed: string;
};

let animal: Animal = {
    name : "기린",
    color: "yellow",
};

let dog: Dog = {
    name : "백구",
    color : "white",
    breed : "진도",
};

animal = dog; // 업캐스팅: 오류없음
// dog = animal; 오류발생: 다운캐스팅
