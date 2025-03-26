// 1. unknown(전체 집합)
// 타입의 변수에는 모든 타입의 값 할당 가능
// => 모든 타입은 unknown 타입으로 업 캐스팅 가능
function unknownExam() {
  let a: unknown = 1; // number -> unknown
  let b: unknown = "hello"; // string -> unknown
  let c: unknown = true; // boolean -> unknown
  let d: unknown = null; // null -> unknown
  let e: unknown = undefined; // undefined -> unknown
  let f: unknown = []; // Array -> unknown
  let g: unknown = {}; // Object -> unknown
  let h: unknown = () => {}; // Function -> unknown

  let unknownVal: unknown;
  // let a: number = unknownVal;
  // unknown -> number
  // 오류 발생
  // unknown 타입을 number 타입에 할당 X => 다운 캐스팅
}

// 2. never(공집합 => 모든 집합의 부분 집합)
// never 타입은 모든 타입의 서브 타입으로 모든 타입으로 업 캐스팅 가능
function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  let num: number = neverFunc(); // never -> number
  let str: string = neverFunc(); // never -> string
  let bool: boolean = neverFunc(); // never -> boolean

  // let a: never = 1;
  // number -> never
  // 오류 발생
  // number 타입을 never 타입에 할당 X => 다운 캐스팅
}

// 3. void(undefined의 슈퍼 타입)
// undefined와 never 이외에 다른 타입의 값 할당 불가능
function voidExam() {
  function voidFunc(): void {
    console.log("jfas");
    return undefined;
  }

  let voidVar: void = undefined;
  // undefined -> void => 업 캐스팅

  function throwError(): never {
    throw new Error("f");
  }
  let voidVar2: void = throwError();
  // never -> void => 업 캐스팅
}

// 4. any
// 모든 타입의 슈퍼 타입이 될 수 있고
// 모든 타입의 서브 타입이 될 수 있음
// => 타입 계층도를 무시하는 치트키 타입

function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  anyVar = unknownVar;
  // unknown -> any => 다운 캐스팅 가능

  undefinedVar = anyVar;
  // any -> undefined => 다운 캐스팅 가능

  // neverVar = anyVar;
  // any -> never => 다운 캐스팅 불가능
  // any 타입이 치트키 타입으로 다운 캐스팅이 다 가능하지만
  // never 타입까지 다운 캐스팅은 불가능

  let num: number = anyVar; // any -> number (다운 캐스팅)
  let str: string = anyVar; // any -> string (다운 캐스팅)

  anyVar = num; // number -> any (업 캐스팅)
  anyVar = str; // string -> any (업 캐스팅)
}
