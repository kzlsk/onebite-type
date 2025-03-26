// 인터페이스

interface Person {
  readonly name: string; // 읽기 전용 프로퍼티
  age?: number; // 선택적 프로퍼티

  // 메서드 타입 정의 - 함수 표현식
  // sayHi: () => void;
  // 메서드 타입 정의 - 호출 시그니처 => 오버로딩 구현 시 사용
  // sayHi() : void;

  // 오버로딩 구현
  sayHi(): void;
  sayHi(a: number, b: number): void;
}

// const person: Person = {
//   name: "채형원",
//   age: 31,
//   sayHi: function () {
//     console.log("hi");
//   },
// };

// person.sayHi();
// person.sayHi(1, 2);

// 인터페이스에서는 Union이나 Intersection 타입 정의하려면
// 타입 별칭과 함께 사용하거나 타입 주석에서 직접 사용해야 함
// 타입 별칭 이용
type Type1 = number | string | Person;
type Type2 = number & string & Person;
// 타입 주석에서 직접 사용
const person: Person | number = {
  name: "이정환",
  age: 27,
  sayHi: function () {
    console.log("hi");
  },
};
