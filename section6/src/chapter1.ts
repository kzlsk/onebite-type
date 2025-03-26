// 타입스크립트의 클래스
// 타입스크립트에서는 클래스의 필드를 선언할 때 주석으로 타입을 함께 정의해주어야 함
// 그렇지 않으면 매개변수와 동일하게 암시적 any 타입으로 추론 된다
// 추가로 생성자에서 각 필드의 값을 초기화하지 않을 경우 초기값도 함께 명시해주어야 함

const employee = {
  name: "유기현",
  age: 31,
  position: "메인보컬",
  work() {
    console.log("유기현 그는 신이야");
  },
};

class Employee {
  // 필드
  name: string = "";
  age: number = 0;
  position: string = "";

  // 생성자
  // 생성자 함수에서 필드의 값들을 잘 초기화 해 준다면 선언시 초기값은 생략 가능
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log(`${this.position}`);
  }
}

const employeeB = new Employee("채형원", 31, "리드댄서");
console.log(employeeB);

// 클래스는 타입이다
// 클래스를 타입으로 사용하면 해당 클래스가 생성하는 객체의 타입과 동일한 타입이 됨
const employeeC: Employee = {
  name: "",
  age: 0,
  position: "",
  work() {},
};

// 상속
// 타입스크립트에서 클래스의 상속을 이용할 때 파생 클래스에서 생성자를 정의 했다면
// 반드시 super 메서드를 호출해 슈퍼 클래스의 생성자를 호출해야 하며,
// 호출 위치는 생성자의 최상단 이어야만 함
class ExecutiveOfficer extends Employee {
  // 필드
  officeNum: number;

  // 생성자
  constructor(name: string, age: number, position: string, officeNum: number) {
    super(name, age, position);
    this.officeNum = officeNum;
  }
}
