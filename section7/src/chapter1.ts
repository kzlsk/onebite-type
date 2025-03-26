// 사례 1 : 2개의 타입 변수가 필요한 상황
function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap("1", 2);
// T : string 타입 / U : number 타입

// 사례 2 : 다양한 배열 타입을 인수로 받아야 하는 상황
// 함수 매개변수 data 타입을 T[]로 설정했기 때문에
// 배열이 아닌 값은 인수로 전달할 수 없음
function returnFirstValue<T>(data: T[]) {
  return data[0];
}

let num = returnFirstValue([0, 1, 2]); // number

let str = returnFirstValue(["chae", "hone"]); // string

let str2 = returnFirstValue([15, "chae", "hone"]); // string | number

// 사례 3 : 반환 값의 타입을 배열의 첫번째 요소의 타입이 되도록 해야 하는 상황
// 함수 매개변수의 타입 정의 시 튜플 타입을 이용해 첫번째 요소의 타입은 T,
// 그리고 나머지 요소의 타입은 ...unknown[]으로 길이도 타입도 상관 없도록 정의
function returnFirstValue2<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let str3 = returnFirstValue2([15, "chae", "hone"]); // number

// 사례 4 : 타입 변수 제한
// => 함수를 호출하고 인수로 전달할 수 있는 값의 범위에 제한두기

// extends 확장을 이용하여 T는 무조건 number 타입의 프로퍼티 length를 가지고 있는 타입으로 제한
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

getLength("123"); // 3
getLength([1, 2, 3]); // 3
getLength({ length: 1 }); // 1
// getLength(undefined); // X => length 프로퍼티를 가지지 않음
