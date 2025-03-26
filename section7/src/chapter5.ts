// 프로미스 사용
// 프로미스는 제네릭 클래스로 구현되어 있음
// 따라서 새로운 promise를 생성할 때 타입 변수에 할당할 타입을 직접 설정해주면
// 해당 타입이 바로 resolve 결과값의 타입이 됨

import { resolve } from "path";

// resolve : 비동기 작업이 성공적으로 완료될 때 실행되는 함수
// reject : 비동기 작업 실패 시 실행되는 함수
const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    // 결과값 20
    // resolve(20);
    reject("~때문에 실패");
  }, 3000);
});

// 타입 변수에 할당할 타입 직접 설정 시 해당 타입이 바로 resolve 결과값의 타입이 됨
promise.then((response) => {
  console.log(response * 10); // 200
});

// reject 함수에 인수로 전달하는 값 즉 실패의 결과값 타입은 정의 불가
// catch 메서드에서 사용하려면 타입 좁히기를 통해 안전하게 사용하는 것을 권장
promise.catch((err) => {
  if (typeof err === "string") {
    console.log(err);
  }
});

// 사용 예시
// 프로미스를 반환하는 함수의 타입 정의

interface Post {
  id: number;
  title: string;
  content: string;
}

// 반환값 타입 직접 명시
function fetchPost(): Promise<Post> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "제목",
        content: "내용",
      });
    }, 3000);
  });
}

const postRequest = fetchPost();

postRequest.then((post) => {
  post.id;
});
