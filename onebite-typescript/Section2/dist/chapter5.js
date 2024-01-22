//enum 타압
//여러 가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 100] = "ADMIN";
    Role[Role["USER"] = 101] = "USER";
    Role[Role["GUEST"] = 102] = "GUEST";
})(Role || (Role = {}));
var Language;
(function (Language) {
    Language["Korean"] = "KO";
    Language["English"] = "EN";
})(Language || (Language = {}));
const user1 = {
    name: "임혁신",
    role: Role.ADMIN,
    language: Language.English,
};
const user2 = {
    name: "홍길동",
    role: Role.USER,
    language: Language.Korean,
};
const user3 = {
    name: "아무개",
    role: Role.GUEST,
};
console.log(user1, user2, user3);
export {};
