// 객체 타입의 호환성
// 기본 타입과 동일한 기준으로 판단하며,
// 모든 객체 타입은 각각 다른 객체 타입들과 슈퍼-서브 타입 관계를 가짐
// 따라서 업 캐스팅은 허용하지만 다운 캐스팅은 허용 X

// 슈퍼
type Animal = {
  name: string;
  color: string;
};

// 서브
type Dog = {
  name: string;
  color: string;
  bread: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "똘이",
  color: "white",
  bread: "포메",
};

animal = dog; // dog -> animal (업 캐스팅)
//dog = animal;
// animal -> dog (다운 캐스팅) 불가능

// 슈퍼
type Book = {
  name: string;
  price: number;
};

// 서브
type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "한 입 리액트",
  price: 33000,
  skill: "reactjs",
};

book = programmingBook; // programmingBook -> book (업 캐스팅)
// programmingBook = book;
// book -> programmingBook (다운 캐스팅) 불가능

// 초과 프로퍼티 검사
// 변수를 객체 리터럴로 초기화할 때 발동하는 기능으로
// 타입에 정의된 프로퍼티 외의 다른 초과된 프로퍼티를 갖는 객체를 변수에 할당할 수 없도록 막음

let book2: Book = {
  name: "한 입 리액트",
  price: 33000,
  // skill: "reactjs", // book 타입에 없는 추가된 프로퍼티 => 초과 프로퍼티 검사 오류 발생
};

// 초과 프로퍼티 검사는 단순히 변수를 초기화할 때 객체 리터럴을 사용하지 않으면 발생 X
// 값을 별도의 다른 변수에 보관한 다음 변수 값을 초기화 값으로 사용하거나 인수로 전달해서 사용하면 검사를 피할 수 있음

// 1. 값을 별도의 다른 변수에 보관한 다음 변수 값을 초기화 값으로 사용
let book3: Book = programmingBook;

// 2. 변수에 미리 값을 담아둔 후 변수 값을 인수로 전달
function func(book: Book) {}
func(programmingBook);
