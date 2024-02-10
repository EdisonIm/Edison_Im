/**
 * 함수 타입의 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는 것
 * 1. 반환값의 타입이 호환되는가
 * 2. 매개변수의 타입이 호환되는가
 * 두 가지의 기준을 모두 만족해야 호환된다고 말할 수 있는 것
 */

//기준1. 반환값이 호환되는가
type A = () => number;
type B = () => 10;

let a: A = () => 10; // number
let b: B = () => 10; // number 리터럴

a = b;
b = a; 
// 오류 : 'A' 형식은 'B' 형식에 할당할 수 없습니다.
// 'number' 형식은 '10' 형식에 할당할 수 없습니다.

//기준2, 매개변수가 호환되는가
//2-1, 매개변수의 갯수가 같을 때

type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

c = d; // 오류 : 'D' 형식은 'C'형식에 할당할 수 없습니다.
// 'value' 및 'value' 매개 변수의 형식이 호환되지 않습니다. 'number' 형식은 '10' 형식에 할당할 수 없습니다.
d = c;

//다른 예시
type Animal = {
    name: string;
};

type Dog = {
    name: string;
    color: string;
};

let animalFunc = (animal:Animal) => {
    console.log(animal.name);
};

let dogFunc = (dog:Dog) => {
    console.log(dog.name);
    console.log(dog.color);
};

animalFunc = dogFunc;
let testFunc = (animal:Animal) => {
    console.log(animal.name);
    console.log(animal.color);
};

dogFunc = animalFunc;
let testFunc2 = (dog:Dog) => {
    console.log(dog.name);
}

//2-2. 매개변수의 개수가 다를 때
type Func1 = (a: string, b: number) => void;
type Func2 = (a: string) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
func2 = func1;// 오류 : 'Func1' 형식은 'Func2' 형식에 할당할 수 없습니다.
