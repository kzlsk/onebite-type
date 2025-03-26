// 접근 제어자(Access Modifier)
// 클래스의 특정 필드나 메서드를 접근할 수 있는 범위를 설정하는 기능
// public : 모든 범위에서 접근 가능
// private : 클래스 내부에서만 접근 가능
// protected : 클래스 내부 또는 파생 클래스 내부에서만 접근 가능

class Employee {
  // 필드

  // 생성자
  // 만약 생성자에 접근 제어자를 설정하면 필드 선언을 모두 제거해 주어야 함
  // 또한 접근 제어자가 설정된 매개변수들은 this.필드 = 매개변수가 자동으로 수행
  // => 내부 코드 제거해도 됨
  constructor(
    protected name: string,
    protected age: number,
    public position: string
  ) {}

  // 메서드
  work() {
    console.log(`${this.position}`);
  }
}

class ExecutiveOfficer extends Employee {
  // 메서드
  func() {
    this.name; // protected이기 때문에 파생 클래스에서는 접근 가능
  }
}

const employee = new Employee("채형원", 31, "리드댄서");
