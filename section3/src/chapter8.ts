// 서로소 유니온 타입
// 교집합이 없는 타입들로만 만든 유니온 타입을 뜻함

type Admin = {
  tag: "ADMIN";
  name: string;
  kickCount: number;
};

type Member = {
  tag: "MEMBER";
  name: string;
  point: number;
};

type Guest = {
  tag: "GUEST";
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

// Admin -> {name}님 현재까지 {kickCount}명 강퇴했습니다.
// Member -> {name}님 현재까지 {point}모았습니다.
// Guest -> {name}님 현재까지 {visitCount}번 오셨습니다.
function login(user: User) {
  if (
    //("kickCount" in user)
    // tag 프로퍼티를 이용하여 타입가드를 더 직관적으로 수정 가능
    user.tag === "ADMIN"
  ) {
    console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다`);
  } else if (
    //("point" in user)
    user.tag === "MEMBER"
  ) {
    console.log(`${user.name}님 현재까지 ${user.point}모았습니다`);
  } else {
    // Guest
    console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다`);
  }
}
