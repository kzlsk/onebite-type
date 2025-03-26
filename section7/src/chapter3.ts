// 제네릭 인터페이스
interface KeyPair<K, V> {
  key: K;
  value: V;
}

// 제네릭 인터페이스는 변수의 타입으로 정의할 때
// 반드시 꺽쇠와 함께 타입 변수에 할당할 타입을 명시해주어야 함
// => 제네릭 함수는 매개변수에 제공되는 값의 타입을 기준으로
// 타입 변수를 추론할 수 있지만 인터페이스는 마땅히 추론할 수 있는 값이 없음
// K : string
// V : number
let keyPair: KeyPair<string, number> = {
  key: "key",
  value: 0,
};

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ["1"],
};

// 인덱스 시그니처와 함께 사요ㅛㅇ
interface NumberMap {
  [key: string]: number;
}

let numberMap1: NumberMap = {
  key: -123,
  key2: 12,
};

// key의 타입은 string, value의 타입은 V인 모든 객체 타입을 포함
interface Map<V> {
  [key: string]: V;
}

// key의 타입은 string, value는 string인 모든 프로퍼티를 포함하는 객체 타입
let stringMap: Map<string> = {
  key: "gsd",
};

// key의 타입은 string, value는 boolean인 모든 프로퍼티를 포함하는 객체 타입
let booleanMap: Map<boolean> = {
  key: true,
};

// 제네릭 타입 별칭
// 제네릭 인터페이스와 마찬가지로 타입으로 정의될 때 반드시 타입 변수에 설정할 타입 명시
type Map2<V> = {
  [key: string]: V;
};

let stringMap2: Map2<string> = {
  key: "fsdf",
};

// 제네릭 인터페이스 활용 예시 => 유저 관리 프로그램
// 유저 : 학생 / 개발자

interface Student {
  type: "std"; // string literal : std
  school: string;
}

interface Developer {
  type: "dev"; // string literal : dev
  skill: string;
}

interface User<T> {
  name: string;
  profile: T;
}

// 함수의 매개변수 타입을 User<Student>로 정의하여
// 학생 유저만 함수의 인수로 전달하도록 제한 => 타입 좁힐 필요 없어지므로 코드 간결
function goToSchool(user: User<Student>) {
  const school = user.profile.school;
  console.log(`${school}로 등교 `);
}

const devUser: User<Developer> = {
  name: "채형원",
  profile: {
    type: "dev",
    skill: "typescript",
  },
};

const stdUser: User<Student> = {
  name: "유기현",
  profile: {
    type: "std",
    school: "mx",
  },
};
