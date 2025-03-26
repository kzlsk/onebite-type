// 선언 합침
// 타입 별칭은 동일한 스코프 내에 중복된 이름으로 선언 불가능
// type Person = {
//     name: string;
//   };

//   type Person = {
//     age: number;
//   };

// 인터페이스는 동일한 스코프 내에서 중복된 이름으로 선언이 가능
// => 중복된 이름의 인터페이스 선언은 결국 모두 하나로 합쳐지기 때문
interface Person {
  name: string;
}

interface Person {
  age: number;
}

// 위에서 선언한 Person 인터페이스들은 결국 합쳐져 다음과 같은 인터페이스가 됨
// 이것을 선언 합침이라고 부름
interface Person {
  age: number;
  name: string;
}

// 주의할 점
// 만약 동일한 이름의 인터페이스들이 동일한 이름의 프로퍼티를
// 서로 다른 타입으로 정의 시 오류 발생 => 충돌
interface Person {
  name: string;
}

interface Person {
  // name: number;
  age: number;
}
