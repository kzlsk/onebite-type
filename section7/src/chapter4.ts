// 제네릭 클래스
// 클래스의 이름 뒤에 타입 변수를 선언
// 이 타입 변수는 클래스 내부에서 자유롭게 사용 가능
// 클래스는 생성자를 통해 타입 변수의 타입을 추론할 수 있기 때문에
// 생성자에 인수로 전달하는 값이 있을 경우 타입 변수에 할당할 타입 생략 가능

class List<T> {
  constructor(private list: T[]) {}

  push(data: T) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

const numberList2 = new List([1, 2, 3]); // number
const stringList = new List(["1", "2"]); // string
