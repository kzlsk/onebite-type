// map 메서드 타입 정의
// map : 원본 배열의 각 요소에 콜백함수를 수행하고
// 반환된 값들을 모아 새로운 배열로 만들어 반환

const arr = [1, 2, 3];
const newArr = arr.map((it) => it * 2); // [2,4,6]

// arr : 메서드를 적용할 배열
// callback : 콜백 함수
function map<T, U>(arr: T[], callback: (item: T) => U) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

// 함수 호출
map(arr, (it) => it * 2); // it = number 타입
map(["chae", " hone"], (it) => it.toLowerCase()); // it = string 타입

// forEach 메서드 타입 정의
// forEach : 배열의 모든 요소에 콜백함수를 한 번씩 수행해주는 메서드
const arr2 = [1, 2, 3];
arr2.forEach((it) => console.log(it));

// arr : 순회 대상 배열
// callback : 모든 배열 요소에 수행할 함수
// forEach 메서드는 반환값이 없는 메서드이므로 콜백 함수의 반환값 타입을 void로 정의
function forEach<T>(arr: T[], callback: (item: T) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

forEach(arr2, (it) => {
  console.log(it.toFixed());
}); // it = number 타입
