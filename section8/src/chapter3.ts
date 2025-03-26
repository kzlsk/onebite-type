// 맵드 타입
// 기존의 객체 타입을 기반으로 새로운 객체 타입을 만드는 타입 조작 기능
// 인터페이스에서는 쓸 수 없음 무조건 타입 별칭으로만 사용해야 함

interface User {
  id: number;
  name: string;
  age: number;
}

type PartialUser = {
  // [key in 'id' | 'name' | 'age'] : key가 한 번은 id, 한 번은 name, 한 번은 age가 된다는 뜻
  // key : id => id: User[id] -> id : number
  // key : name => name: User[name] -> name : string
  // key : age => id: User[age] -> age : number
  // 물음표를 붙여주면 모든 프로퍼티가 선택적 프로퍼티가 됨
  [key in "id" | "name" | "age"]?: User[key];
};

// 프로퍼티의 개수가 많아져 하나하나 유니온 타입으로 쓰기 힘들다면 keyof 연산자 활용하기
type BooleanUser = {
  [key in keyof User]: boolean;
};

// 모든 프로퍼티가 읽기 전용인 객체를 반환해야 한다면 맨 앞에 readonly 붙여주기
type readonlyUser = {
  readonly [key in keyof User]: User[key];
};

// 한 명의 유저 정보를 불러오는 기능
function fetchUser(): User {
  return {
    id: 1,
    name: "채형원",
    age: 31,
  };
}

// 유저 정보 수정하는 기능
function updateUser(user: User) {
  // 수정 기능
}

updateUser({
  id: 1,
  name: "채형원",
  age: 30,
});
