// 대수 타입
// 여러 개의 타입을 합성해서 새롭게 만들어낸 타입
// 합집합(Union) | 교집합(Intersection) 타입 존재

// 합집합 - Union
// 유니온 타입에 참여하는 타입들의 개수에는 제한이 없음
let a: string | number | boolean;

a = 1;
a = "gd";
a = true;

// 배열 타입 정의
let arr: (number | string | boolean)[] = [1, "fd", true];

// 객체 타입 정의
type Dog = {
  name: string;
  color: string;
};
type Person = {
  name: string;
  lang: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
  name: "",
  color: "",
};

let union2: Union1 = {
  name: "",
  lang: "",
};

let union3: Union1 = {
  name: "",
  color: "",
  lang: "",
};

// 오류 발생
// let union4: Union1 = {
// name: "",
// };

// 교집합 - Intersection
let variable: number & string; // never 타입으로 추론

type Dog1 = {
  name: string;
  color: string;
};
type Person1 = {
  name: string;
  lang: string;
};

type Intersection = Dog1 & Person1;

// 3개의 프로퍼티 중 하나라도 빠지면 오류 발생
let intersection1: Intersection = {
  name: "",
  color: "",
  lang: "",
};
