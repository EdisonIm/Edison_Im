/**
 * 타입스크립트의 클래스
 */

const employee = {
    name: "초보코더",
    level: 5,
    position: "developer",
    work() {
        console.log("개발함ㅎ_ㅎ");
    },
};

class Employee {
    //필드
    name
    level
    position

    //생성자
    constructor(name: string, level: number, position: string) {
        this.name = name;
        this.level = level;
        this.position = position;
    }

    //메서드
    work() {
        console.log("개발함ㅎ_ㅎ");
    }
}

class ExecutiveOfficer extends Employee {
    //필드
    officeNumber: number;
    //생성자
    constructor(
        name: string, 
        level: number, 
        position: string, 
        officeNumber: number
    ) {
        super(name, level, position);
        this.officeNumber = officeNumber;
    }
}

const executiveOfficer = new ExecutiveOfficer("임혁신", 100, "COO", 17);
console.log(executiveOfficer);

/**
const employeeB = new Employee ("초보코더", 5, "개발자");
console.log(employeeB);
employee.work();

const employeeC: Employee = {
    name: "",
    level: 0,
    position: "",
    work() {},
};
*/