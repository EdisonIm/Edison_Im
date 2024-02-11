/**
 * 접근 제어자
 * access modifier
 * public private protected
 */

class Employee {
    /**필드
    public name: string;
    private level: number;
    protected position: string;
    */

    //생성자
    constructor(
        public name: string, 
        private level: number, 
        protected position: string
    ) {
        this.name = name;
        this.level = level;
        this.position = position;
    }

    /**메서드
    work() {
        console.log(`${this.level}입니다.`);
    }
    */
}

const employee = new Employee("초보코딩", 10, "개발자");
employee.name = "중수코딩";
// employee.level = 20;
// employee.position = "디자이너";
console.log(employee);

