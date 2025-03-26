// 타입 좁히기
// 조건문 등을 이용해 넓은 타입에서 좁은 타입으로 타입을 상황에 따라 좁히는 방법

function func(value: number | string) {
  // 조건문을 이용해 조건문 내부에서 변수가 특정 타입임을 보장하면
  // 해당 조건문 내부에서는 변수의 타입이 보장된 타입으로 좁혀짐
  // 또 if (typeof === ...) 처럼 조건문과 함께 사용해 타입을 좁히는 표현들을
  // 타입가드라고 부름

  // 타입가드
  if (typeof value === "number") {
    console.log(value.toFixed()); // value = number로 추론
    // 타입가드
  } else if (typeof value === "string") {
    console.log(value.toUpperCase()); // value = string으로 추론
  }
}

// instanceof 타입가드
// 내장 클래스 타입을 보장할 수 있는 타입가드 만들 수 있음
// Instanceof는 내장 클래스 또는 직접 만든 클래스에만 사용이 가능한 연산으로,
// 우리가 직접 만든 타입과 함께 사용 불가
function func2(value: number | string | Date | null) {
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    // instanceof 타입가드
    // instanceof = value가 Date 객체인지 확인하는 역할
    console.log(value.getTime());
  }
}

// in 타입가드
// 우리가 직접 만든 타입과 함께 사용 시 in 연산자 이용
type Person = {
  name: string;
  age: number;
};
function func3(value: number | string | Date | null | Person) {
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    // instanceof => value가 Date 객체인지 확인하는 역할
    console.log(value.getTime());
  } else if (value && "age" in value) {
    // in 타입가드
    // in => age 프로퍼티가 value라는 값에 있는지 확인
    // in 연산자 뒤에는 null이나 undefined 값이 오면 안됨
    console.log(`&{value.name}은 ${value.age}살 입니다.`);
  }
}
