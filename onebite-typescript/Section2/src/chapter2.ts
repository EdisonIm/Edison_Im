//배열
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ["hello", "I am", "innovation"];

let boolArr: Array<boolean> = [true, false, true];

//배열에 들어가는 요소들의 타입이 다양할 겅우
let multiArr: (number | string)[] = [1, "hello"];

//다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
    [1, 2, 3],
    [4, 5],
];

//튜플
let tub1: [number, number] = [1, 2];

let tub2: [number, string, boolean] = [1, "2", true];

const users: [string, number][] = [
    ["김씨", 1],
    ["이씨", 2],
    ["박씨", 3],
    // [4, "최씨"],
];

