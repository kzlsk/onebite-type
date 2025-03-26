// 함수 타입의 호환성
// 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는 것
// 함수 타입의 호환성 판단 기준
// 1. 반환값의 타입이 호환되는가?
// 2. 매개변수의 타입이 호환되는가?

// 1. 반환값의 타입이 호환되는가?
// A와 B 함수 타입이 있다고 가정할 때,
// A 반환값 타입이 B 반환값 타입의 슈퍼타입일 시 두 타입은 호환됨 => 업 캐스팅만 호환
type A = () => number;
type B = () => 10;

let a: A = () => 10; // number
let b: B = () => 10; // number literal

a = b; // 호환 o
// b = a;
// 호환 X => number literal 타입이 number에 속하기 때문에
// 다운 캐스팅으로 호환 X

// 2. 매개변수의 타입이 호환되는가?
// 두 함수의 매개변수의 개수가 같은지 다른지에 따라 두가지 유형으로 나뉨

// 2-1. 매개변수의 개수가 같을 때
// 두 함수 타입 C와 D가 있을 때, 두 타입의 매개변수의 개수가 같다면
// C 매개변수의 타입이 D 매개변수 타입의 서브타입일 때 호환됨 =>  다운 캐스팅만 호환

// type C = (value: number) => void;
// type D = (value: number) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d; // 호환 O
// d = c; // 호환 O

type C = (value: number) => void;
type D = (value: 10) => void;

// c = d; // 호환 X
// number literal 타입을 number 타입으로 취급하면 업 캐스팅으로 호환 X
d = c; // 호환 O => 다운 캐스팅이기 때문에 호환 O

// 다른 예시

// 슈퍼타입
type Animal = {
  name: string;
};

// 서브타입
type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};
let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

// animalFunc = dogFunc; // 호환X => 업캐스팅으로 호환 X
// Animal 타입은 color 프로퍼티가 존재하지 않음
// 즉, 슈퍼타입인 Animal은 서브타입인 Dog 보다
// 더 적은 정보를 가지고 있으므로 animbalFunc를 dogFunc에 할당하면
// 없는 속성을 참조할 위험이 있어 허용 X
// But, 반대는 가능

// 2-2. 매개변수의 개수가 다를 때
// 할당하려고 하는 쪽의 함수의 타입에 매개변수의 수가 더 적을 때만 호환

type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2; // 호환 o
// func2 = func1; // 호환 x => func2는 1개이지만 func1은 2개임
