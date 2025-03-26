// 제네릭
// 함수나 인터페이스, 타입 별칭, 클래스 등을 다양한 타입과 함께 동작하도록
// 만들어 주는 타입스크립트의 놀라운 기능 중 하나

// 제네릭 사용 전
function func(value: any) {
  return value;
}

// any 타입으로 추론되는 이유는
// 위 함수는 인수로 전달한 값을 그대로 반환하는 함수인데,
// 현재 num과 str, bool의 타입은 any 타입이됨
// func 함수의 반환값 타입이 return 문을 기준으로 추론되었기 때문
let num = func(10); // any 타입
let bool = func(true); // any 타입
let str = func("fssd"); // any 타입

// 제네릭 함수
// 두루두루 모든 타입의 값을 다 적용할 수 있는 그런 범용적인 함수

// 제네릭 사용 후
// 함수 이름 뒤에 꺽쇠를 열고 타입을 담는 변수인 타입 변수 T 선언
// 그리고 매개변수와 반환값의 타입을 타입 변수 T로 설정
// T에 어떤 타입이 할당될 지는 함수가 호출할 때 결정됨
function func2<T>(value: T): T {
  return value;
}

let number = func2(10); // T = number 타입

let str2 = func2("sdfas"); // T = string 타입

let arr = func2([1, 2, 3]); // T = number[] 타입

// 제네릭 함수 호출 시 타입 변수에 할당할 타입을 직접 명시하는 것도 가능
function func3<T>(value: T): T {
  return value;
}

let arr2 = func3<[number, number, number]>([1, 2, 3]);
// T = [number, number, number] 튜플 타입 할당
// 매개변수 value, 반환값 타입도 모두 튜플 타입
