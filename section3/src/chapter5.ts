// 타입 추론
// 타입스크립트는 타입이 정의되어 있지 않은 변수의 타입을 초기값 기준으로 자동으로 추론함

let a = 10; // 자동으로 number 타입으로 추론

let c = {
  id: 1,
  name: "이정환",
  profile: {
    nickname: "winterlood",
  },
  urls: ["https://winterlood.com"],
};

let { id, name, profile } = c;

let [one, two, three] = [1, "hello", true];

function func() {
  return "hello";
}

function func1(message = "hello") {
  return "hello";
}

// 주의
// any 타입의 진화
let d; // 초기값이 없는 경우 암묵적으로 any 타입으로 추론하며 진화함
d = 10;
d.toFixed(); // any -> number 타입으로 추론

d = "fs";
d.toLowerCase(); // any -> string 타입으로 추론

// 상수의 추론
const num = 10; // number literal 타입으로 추론
const str = "fsf"; // string literal 타입으로 추론

// 다양한 타입의 요소를 담은 배열 추론
let arr = [1, "fs"]; // Union 타입으로 추론
