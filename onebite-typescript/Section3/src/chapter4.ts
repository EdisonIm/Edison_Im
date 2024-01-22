/**
 * 1. 합집합 - Union 타입
 */

let a : string | number | boolean;
a = 1;
a = "Hello";
a = true;

let arr: (number | string | boolean)[] = [1, "Hello", true];



type Union1 = Dog | Person //타입 별칭으로 유니언 타입 만들기

let union1 : Union1 = {
    name : "",
    color : "",
};

let union2 : Union1 = {
    name : "",
    language : "",
};

let union3 : Union1 = {
    name : "",
    color : "",
    language : "",
};

/**
let union4 : Union1 = {
    name : "",
}; 
*/ //오류. 합집합 밖에 있음


/**
 * 2. 교집합 Intersection 타입
 */

let variable : number & string;

type Dog = {
    name : string;
    color : string;
};

type Person = {
    name : string;
    language : string;
};

type Intersection = Dog & Person;

let intersection1 : Intersection = {
    name : "",
    color : "",
    language : "",
};
