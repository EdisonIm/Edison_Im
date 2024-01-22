//타입 별칭
type User = {
    id: number;
    name: string;
    nickname: string;
    birth: string;
    bio: string;
    location: string;
};

let user: User = {
    id: 1,
    name: "임혁신",
    nickname: "innovation IM",
    birth: "2000,01.01",
    bio: "Hello",
    location: "seoul",
};

let user2: User = {
    id: 2,
    name: "김혁신",
    nickname: "innovation KIM",
    birth: "2001,01.01",
    bio: "Hello~",
    location: "busan",
};

//인덱스 시그니처
type CountryCodes = {
    [key: string]: string;
};

let countryCodes: CountryCodes = {
    Korea: "KO",
    UnitedStates: "US",
    UnitedKingdom: "UK",
};

type CountryNumberCodes = {
    [key: string]: number;
};

let countryNumberCodes: CountryNumberCodes = { };
