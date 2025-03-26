// void
// 아무것도 없음을 의미하는 타입
// 아무런 값도 반환하지 않는 함수의 반환값 타입을 정의할 때 사용

function func1(): string {
  return "hello";
}

function func2(): void {
  console.log("hello");
}

// 변수의 타입으로도 void 타입을 지정할 수 있음
let a: void;
// But, void 타입의 변수에는 undefined 이외의 다른 타입의 값을 담을 수 없음
// a = 1; // 오류 발생
//a = "hello"; // 오류 발생
//a = {}; // 오류 발생
a = undefined;
// 'strictNullChecks : false'일 경우에는 null 값도 담을 수 있음
// a = null;

// nver
// 불가능을 의미하는 타입
// 함수가 어떠한 값도 반환할 수 없는 상황일 때 해당 함수의 반환값 타입을 정의할 때 사용
// 무한 루프, 의도적으로 오류를 발생시키는 함수의 반환값 타입 정의 시 사용

// 사용 예시 1 : 무한 루프
function func3(): never {
  while (true) {}
}

// 사용 예시 2 : 의도적 오류 발생
function func4(): never {
  throw new Error();
}

// 변수의 타입을 never로 정의하는 것은 가능
let a1: never;

let anyVar: any;

// But, any를 포함해 그 어떠한 타입의 값도 변수에 담을 수 없음
// a1 = 1; // 오류 발생
// a1 = null; // 오류 발생
//a1 = undefined; // 오류 발생
//a1 = anyVar; // 오류 발생
