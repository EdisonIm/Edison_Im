//enum 타압
//여러 가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
    ADMIN = 100,
    USER,
    GUEST,
}

enum Language {
    Korean = "KO",
    English = "EN",
}

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