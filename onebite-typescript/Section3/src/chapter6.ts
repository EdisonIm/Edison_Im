/**
 * 타입 단언
 */

 type Person = {
    name : string;
    age : number;
 };

 let person = {} as Person;
 person.name = "초보코더";
 person.age = 20;

type Dog = {
    name : string;
    color : string;
};

 let dog = {
    name : "백구",
    color : "white",
    breed : "진도",
 } as Dog; 


 /**
  * 타입 단언의 규칙
  * 값 as 단언 <- 단언식
  */

let num1 = 10 as never;
let num2 = 10 as unknown;
//에러 : let num3 = 10 as string;


/**
 * const 단언
 */

let num4 = 10 as const;

let cat = {
    name : "냥이",
    color : "yello",
} as const;

//에러 : cat.name = ''


/**
 * Non Null 단언
 */

type Post = {
    title : string;
    author? : string;
};

let post : Post = {
    title : "게시글1",
    author : "초보코더",
};

//에러 : const len1 : number = post.author?.length;
const len2 : number = post.author!.length;
