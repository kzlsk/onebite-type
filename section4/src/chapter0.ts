// 함수 타입 정의

// 함수를 설명하는 가장 좋은 방법
// 어떤 매개변수를 받고, 어떤 결과값을 반환하는 지 이야기 => Js
// 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는 지 이야기 -> ts

// 함수의 반환값 타입은 자동으로 추론되기 때문에 생략 가능
function func(a: number, b: number): number {
  return a + b;
}

// 화살표 함수 타입 정의

// 함수의 반환값 타입은 자동으로 추론되기 때문에 생략 가능
const add = (a: number, b: number): number => a + b;

// 함수의 매개변수
// tall 같은 선택적 매개변수의 타입은 자동으로 undefined 와 유니온 된 타입으로 추론
// 따라서 tall 타입은 현재 number | undefined가 됨 => 타입 좁히기 필요
// 또한 선택적 매개변수는 필수 매개변수 앞에 올 수 없고, 반드시 뒤에 위치해야 함
function introduce(name = "채형원", tall?: number) {
  // name : string 타입으로 추론
  console.log(`name : ${name}`);
  if (typeof tall === "number") {
    // 타입 좁히기
    console.log(`tall : ${tall}`);
  }
}

introduce("채형원", 180);
introduce("채형원"); // tall은 선택적 매개변수이기에 생략 가능

// 나머지 매개변수
function getSum(...rest: number[]) {
  // rest 파라미터 : 함수에 전달한 인수들을 순차적으로 배열에 저장
  let sum = 0;
  rest.forEach((it) => (sum += it));
}

// 만약 매개변수의 길이를 고정하고 싶다면 튜플 타입 이용
