// any
// 특정 변수의 타입을 확실히 모를 때 사용

// let anyVar  = 10;
// anyVar = "hello";
// 타입스크립트에서는 변수의 타입이 변수를 초기화할 때 초기화하는 값 기준으로 타입을 추론함
// anyVar 변수는 지금 숫자 타입으로 추론되고 있기 때문에 오류 발생
// 이럴 때 any 사용 => but any는 안 사용하는 게 좋음

// any 타입은 어떠한 타입 검사도 받지 않기 때문에 아무 타입의 값이나 범용적으로 담아 사용 가능
// 또한 다양한 타입의 메서드도 마음대로 호출해서 사용 가능
let anyVar: any = 10;
anyVar = "hello";

anyVar = true;
anyVar = {};

anyVar.toUpperCase();
anyVar.toFixed();
anyVar.a;

// 또 any 타입의 값은 어떤 타입으로 정의된 변수던 문제 없이 다 할당 가능
let num: number = 10;
num = anyVar;

// unknown
// any 타입과 비슷하지만 보다 안전한 타입
// 값을 저장하는 행위만 가능

let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// 어떤 타입의 값이든 다 저장할 수 있지만 어떤 타입의 변수에도 저장 불가능
// num = unknownVar; // 오류 발생

// 따라서 어떤 연산에도 참여할 수 없으며, 어떤 메서드도 사용 불가능
// unknownVar.toUpperCase(); // 오류 발생

// unknown 타입의 값을 활용하려면 조건문을 이용하여 특정 타입의 값이라는 것을 보장해줘야 함
// 타입스크립트에서는 조건문을 이용하여 특정 타입임을 보장할 수 있게 되면
//  해당 값의 타입이 자동으로 바뀜 => 타입 좁히기
if (typeof unknownVar === "number") {
  num = unknownVar;
}
