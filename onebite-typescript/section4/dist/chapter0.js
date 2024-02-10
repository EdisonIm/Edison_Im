/**
 * 함수 타입 정의
 */
// 함수를 설명하는 가장 좋은 방법
// 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기하는 것
// 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지 이야기하는 것
function func(a, b) {
    return a + b;
}
/**
 * 화살표 함수의 타입을 정의하는 방법
 */
const add = (a, b) => a + b;
/**
 * 함수의 매개변수
 */
function introduce(name = "초보코더", codingLevel, workingYear) {
    // 필수 매개변수는 선택적 매개변수보다 앞에 있어야 한다. ?가 나오려면 제일 뒤에 있어야 하는 것
    console.log(`name : ${name}`);
    if (typeof workingYear === "number") {
        console.log(`tall : ${workingYear + 10}`);
        // 원랜 undefined가 나올 수 있어서 안된다. 타입을 좁혀줬기 때문에 가능
    }
}
introduce("초보코더", 5, 10);
introduce("초보코더", 2);
function getSum(...rest) {
    let sum = 0; // sum 값을 만들고 0으로 초기화
    rest.forEach((it) => (sum += it));
    return sum;
}
getSum(1, 2, 3); //6
getSum(1, 2, 3, 4, 5); //15
export {};
