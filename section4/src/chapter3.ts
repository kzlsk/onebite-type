// 함수 오버로딩
// 하나의 함수를 매개변수의 개수나 타입에 따라 여러가지 버전으로 만드는 문법

// 하나의 함수 func
// -> 모든 매개변수의 타입은 number
// -> ver1. 매개변수 1개 => 이 매개변수에 20을 곱한 값 출력
// -> ver2. 매개변수 3개 => 이 매개변수들을 다 더한 값 출력

// 버전들 -> 오버로드 시그니처

// ver1
function func(a: number): void;
// ver2
function func(a: number, b: number, c: number): void;

// 함수의 실제 구현부 -> 구현 시그니처
// 구현 시그니처의 매개변수 타입은 모든 오버로드 시그니처와 호환되도록 만들어야 함
// => 매개변수 b, c를 선택적 매개변수로 만들어 매개변수를 하나만 받는 첫 번째
// 오버로드 시그니처와도 호환되도록 만들어줌
function func(a: number, b?: number, c?: number) {
  if (typeof b === "number" && typeof c === "number") {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}

// func(); // 호환 X => 매개변수를 하나도 안 받는 버전의 오버로드 시그니처는 존재 X
func(1); //버전 1 - 오버로드 시그니처
// func(1, 2); // 호환 X => 매개변수를 2개만 받는 버전의 오버로드 시그니처는 존재 X
func(1, 2, 3); // 버전 2 - 오버로드 시그니처
