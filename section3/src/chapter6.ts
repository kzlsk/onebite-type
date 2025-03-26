// 타입 단언
//

type Person = {
  name: string;
  age: number;
};

// 값 as 타입으로 특정 값을 원하는 타입으로 단언 가능
// 초과 프로퍼티 검사를 피할 때에도 사용 가능
let person = {} as Person;
person.name = "채형원";
person.age = 30;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "채채",
  color: "white",
  breed: "포메라니안",
} as Dog;

// 타입 단언의 규칙
// 값 as 단언 <- 단언식
// A as B
// A가 B의 슈퍼타입이거나 A가 B의 서브타입이어야 함

let num1 = 10 as never; // A가 B의 슈퍼타입이기에 에러 X
let num2 = 10 as unknown; // A가 B의 서브타입이기에 에러 X

// let num3 = 10 as string; // 에러 발생 -> A가 B의 슈퍼타입이거나 서브타입이 아님

// 다중 단언
let num4 = 10 as unknown as string;

// const 단언
// 특정 값을 const 타입으로 단언하면 마치 변수를 const로 선언한 것과 비슷하게 타입이 변경
let num5 = 10; // number
let num6 = 10 as const; // 10 Number Literal 타입으로 단언됨

let cat = {
  name: "균이",
  color: "black",
} as const;
// 모든 프로퍼티가 readonly를 갖도록 단언됨 => 값 수정 불가

// non null 단언
type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "몬스타엑스",
  author: "채형원",
};

const len: number = post.author!.length;
// 오류 발생 -> 옵셔널체이닝(?) 사용으로 이 값이 undefined가 될 수 있음
// ? => ! 바꿔주면 undefined이거나 null이 아닐 것으로 단언 가능
