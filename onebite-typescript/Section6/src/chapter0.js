/**
 * 클래스
 */

let studentA = {
  name: "초보",
  grade: "A+",
  level: 5,
  study() {
    console.log("열심히 코딩함");
  },
  introduce() {
    console.log("ㅎㅇㅎㅇ^O^~");
  },
};

class Student {
  name;
  grade;
  level;

  constructor(name, grade, level) {
    this.name = name;
    this.grade = grade;
    this.level = level;
  }

  //메서드
  study() {
    console.log("열심히 코딩함");
  }

  introduce() {
    console.log(`ㅎㅇㅎㅇ~ ${this.name}입니다^O^~`);
  }
}

class StudentDeveloper extends Student {
  favoritSkill;

  constructor(name, grade, level, favoritSkill) {
    //매개변수 name, grade, age는 지우면 안됨
    super(name, grade, level); //부모 클래스의 생성자 호출 : this.name = name 으로 설정
    this.favoritSkill = favoritSkill;
  }

  //메서드
  programming() {
    console.log(`${this.favoritSkill}으로 코딩합니다^_^`);
  }
}

const studentDeveloper = new StudentDeveloper("초보코더", "A+", "5", "Python");
console.log(studentDeveloper);
studentDeveloper.programming();

// 클래스를 이용해서 만든 객체 -> 인스턴스
// 스튜던트 인스턴스
//let studentB = new Student("초보코더", "A+", 3);
//console.log(studentB);
//studentB.study();
//studentB.introduce();
