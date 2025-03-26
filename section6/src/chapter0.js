// 클래스
// 동일한 모양의 객체를 더 쉽게 생성하도록 도와주는 문법

let studentA = {
  name: "채형원",
  grade: "A+",
  age: 31,
  study() {
    console.log("잘생김");
  },
  introduce() {
    console.log("완식남");
  },
};

// 클래스 이름은 앞글자를 대문자로 하는 파스칼 표기법 사용
// class Student {
//   // 필드 : 클래스가 생성할 객체가 갖는 프로퍼티
//   name;
//   grade;
//   age;

//   // 생성자 : 매개변수로 프로퍼티 값을 받아 this.프로퍼티의 값으로 할당
//   // this는 객체이며 현재 만들고 있는 객체를 의미
//   constructor(name, grade, age) {
//     this.name = name;
//     this.grade = grade;
//     this.age = age;
//   }
//   // 메서드
//   study() {
//     console.log("잘생김");
//   }

//   introduce() {
//     console.log("유설생");
//   }
// }

// 클래스를 호출하여 객체 생성 => new 클래스 이름 형태로 클래스의 생성자 함수 호출
// 클래스를 이용해서 만든 객체 => 인스턴스라고 부름
// const studentB = new Student("유기현", "A+", 31);

// this 활용하기
class Student {
  // 필드 : 클래스가 생성할 객체가 갖는 프로퍼티
  name;
  grade;
  age;

  // 생성자 : 매개변수로 프로퍼티 값을 받아 this.프로퍼티의 값으로 할당
  // this는 객체이며 현재 만들고 있는 객체를 의미
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }
  // 메서드
  study() {
    console.log("잘생김");
  }

  introduce() {
    console.log(`유설생 : ${this.name}`);
  }
}
const studentB = new Student("유기현", "A+", 31);
studentB.introduce();

// 상속
// 앞서 만든 클래스를 기반으로 추가적인 필드와 메서드를 갖는 클래스를
// 선언하고자 할 때 사용
class StudentDeveloper extends Student {
  // 필드
  skill;

  // 생성자
  constructor(name, grade, age, skill) {
    // 슈퍼 클래스의 생성자 호출
    super(name, grade, age);
    this.skill = skill;
  }

  // 메서드
  charming() {
    console.log(`${this.skill}`);
  }
}

const studentDeveloper = new StudentDeveloper("이민혁", "A", 31, "날티개쩜");
console.log(studentDeveloper);
studentDeveloper.skill();
