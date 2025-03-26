// 함수 타입 표현식
// 타입 별칭과 함께 별도로 작성 가능 => 함수 타입 표현식

type Operation = (a: number, b: number) => number;

const add: Operation = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const mul: Operation = (a, b) => a * b;
const div: Operation = (a, b) => a / b;

// 함수 타입 표현식이 반드시 타입 별칭과 함께 사용되어야 하는 것은 아님
// 그냥 함수 타입 표현식을 타입 주석에 사용해도 문제 없음
const add2: (a: number, b: number) => number = (a, b) => a + b;

// 호출 시그니처
// 함수 타입 표현식과 동일하게 함수의 타입을 별도로 정의하는 방식

// 자바스크립트에서는 함수도 객체이기 때문에,
// 객체를 정의하듯 함수의 타입을 별도로 정의 가능
type Operation2 = {
  (a: number, b: number): number;
};

const add3: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const mul2: Operation2 = (a, b) => a * b;
const div2: Operation2 = (a, b) => a / b;

// 하이브리드 타입
// 함수이자 일반 객체를 의미하는 타입

type Operation3 = {
  (a: number, b: number): number;
  name: string; // 추가 프로퍼티 정의
};

const add4: Operation3 = (a, b) => a + b;
add4(4, 2);
add4.name;
