// 인터페이스 확장
// interface 타입이름 extends 확장 할 타입이름 형태로 정의 시
// 해당 타입에 정의된 모든 프로퍼티를 다 가지고 오게 됨

interface Animal {
  name: string;
  age: number;
}

// 인터페이스 확장
interface Dog extends Animal {
  isBark: boolean;
}

// 인터페이스 확장
interface Cat extends Animal {
  isScratch: boolean;
}

// 인터페이스 확장
interface Chicken extends Animal {
  isFly: boolean;
}

const dog: Dog = {
  name: "돌",
  age: 45,
  isBark: true,
};

// 인터페이스 재정의
// 원본 타입을 A, 재정의 된 타입을 B라고 하면
// 반드시 A가 B의 슈퍼 타입이 되도록 재정의 해야 함
// ex) name을 number 타입으로 재정의 하는 것은 불가능
interface Dog extends Animal {
  //name: "돌";
  isBark: boolean;
}

// 타입 별칭 확장
// 인터페이스는 타입 별칭으로 정의된 객체도 확장 가능
type Animal2 = {
  name: string;
  color: string;
};

interface Dog2 extends Animal2 {
  breed: string;
}

// 다중 확장
// 여러개의 인터페이스를 확장하는 것 또한 가능
interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  name: "",
  age: 45,
  isBark: true,
  isScratch: true,
};
