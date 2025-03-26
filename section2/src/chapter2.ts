// 배열
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["hello", "om", "fd"];
let boolArr: Array<boolean> = [true, false, true];

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multArr: (string | number)[] = [1, "hrl"];

// 다차원 배열 정의
let doubleArr: number[][] = [
  [1, 2, 3],
  [3, 4],
];

// 튜플 : 자바스크립트엔 없고 타입스크립트에만 존재하는 타입
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
let tup2: [number, string, boolean] = [1, "2", true];
// 배열 메소드 사용 시 튜플 길이 제한 발동 X
tup1.push(1);
tup1.pop();

// 튜플 쓰는 이유
// 순서를 잘못 배치하여 요소 추가 시
// 자바스크립트에서는 문제를 확인할 방법 X
// but, 타입스크립트에서는 튜플을 사용하면 문제 바로 확인 가능
const users: [string, number][] = [
  ["rlaflsk", 1],
  ["어떠고", 2],
  ["ggdfg", 3],
  //[4, "gdfg"], // 순서 오류 발생
];
