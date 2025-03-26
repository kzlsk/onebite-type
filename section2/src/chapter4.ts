// 타입 별칭
// 동일한 스코프에 동일한 이름의 타입 선언 X
// but, 스코프가 다르면 중복된 이름으로 여러개 별칭 선언 가능
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

function func() {
  type User = {};
}

let user: User = {
  id: 1,
  name: "김리나",
  nickname: "go5rae",
  birth: "2002.01.01",
  bio: "안녕",
  location: "대구",
};
let user2: User = {
  id: 2,
  name: "김리나f",
  nickname: "go5raef",
  birth: "2002.01.02",
  bio: "안녕",
  location: "대구",
};

// 인덱스 시그니처
// 객체 타입을 유연하게 정의할 수 있도록 돕는 특수한 문법
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

type CountryNumberCodes = {
  [key: string]: number;
  // 반드시 포함해야 하는 프로퍼티가 있을 경우 직접 명시
  Korea: number;
};

let CountryNumberCodes: CountryNumberCodes = {
  Korea: 410,
  UnitedState: 840,
  UnitedKingdom: 826,
};
