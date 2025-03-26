// 객체
let user: // 객체 리터럴 타입
{
  id?: number; // 선택적 프로퍼티
  name: string;
} = {
  id: 1,
  name: "go5rae",
};

let dog: {
  name: string;
  color: string;
} = {
  name: "똘이",
  color: "white",
};

let config: {
  // readonly : 값 수정 불가
  readonly apiKey: string;
} = {
  apiKey: "my api key",
};

// 타입스크립트의 object 타입은 단순 값이
// 객체임을 표현하는 것 외에 아무런 정보도 제공하지 않음
// 이 타입은 객체의 프로퍼티에 대한 정보 X
