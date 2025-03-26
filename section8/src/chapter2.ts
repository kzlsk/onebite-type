// keyof 연산자
// 객체 타입으로부터 프로퍼티의 모든 key들을 String Literal Union 타입으로 추출하는 연산자

interface Person {
  name: string;
  age: number;
}

// keyof Person : 'name' | 'age'
// keyof 연산자는 오직 타입에만 적용할 수 있는 연산자임
function getPropertyKey(person: Person, key: keyof Person) {
  return person[key];
}

const person: Person = {
  name: "채형원",
  age: 31,
};

getPropertyKey(person, "name"); // 채형원

// typeof 연산자와 함께 사용
// type 정의 시 사용하면 변수의 type을 뽑아내는 용도로 활용 가능
type Person2 = typeof person2; // {name: string, age : number, location: string}

const person2 = {
  name: "채형원",
  age: 31,
  location: "광주",
};

function getPropertyKey2(person: Person, key: keyof typeof person2) {
  return person2[key];
}
