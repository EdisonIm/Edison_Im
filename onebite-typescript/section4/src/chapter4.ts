/**
 * 사용자 정의 타입 가드
 */

type Dog = {
    name: string;
    isBark: boolean;
};

type Cat = {
    name: string;
    isScratch: boolean;
};

type Animal = Dog | Cat;

function isDog(animal: Animal): animal is Dog { // True를 리턴한다면 animal is Dog를 리턴하게 만듦
    return (animal as Dog).isBark !== undefined // animal 타입을 Dog로 좁혀줌
}

function isCat(animal: Animal): animal is Cat {
    return (animal as Cat).isScratch !== undefined
}

function warning(animal: Animal) {
    if("isBark" in animal) {
        // function이 true면 Dog 타입이라고 알아듣게 만드는 것
        animal;
    } else if ("isScratch" in animal) {
        // 고양이
        animal;
    }
}