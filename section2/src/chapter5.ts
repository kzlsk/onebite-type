// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

// 숫자형 enum
enum Role {
  // 숫자 값을 직접 할당하지 않아도 0부터 1씩 늘어나는 값으로 자동 할당
  ADMIN,
  USER,
  GUEST,
}

// 문자형 enum
enum Language {
  korean = "ko",
  english = "en",
}

/*
자동 할당되는 값은 기본적으로 0부터 시작하지만,
값을 변경하고 싶다면 시작하는 위치에 값을 직접 할당해주면 됨
그럼 자동으로 아래 멤버들은 1씩 증가된 값으로 할당
enum Role {
  ADMIN = 10, => 10
  USER, => 11 
  GUEST, => 12
}
*/

const user1 = {
  name: "김리나",
  role: Role.ADMIN,
  language: Language.korean,
};
const user2 = {
  name: "유기현",
  role: Role.USER,
};
const user3 = {
  name: "채형원",
  role: Role.GUEST,
};
