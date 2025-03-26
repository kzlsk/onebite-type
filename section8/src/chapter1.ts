// 인덱스드 엑세스 타입
// 인덱스를 이용해 다른 타입 내의 특정 프로퍼티의 타입을 추출하는 타입

// 객체 프로퍼티의 타입 추출
interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
  };
}

const post: Post = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "채형원",
  },
};

// Post['author'] : Post 타입으로부터 author 프로퍼티의 타입 추출
// => {id : number, name: string}
// 이때 대괄호 속에 들어가는 String Literal 타입인 'author'를 인덱스라고 부름
// 주의할 점은 인덱스에는 값이 아니라 타입만 들어갈 수 있음
function printAuthorInfo(author: Post["author"]) {
  console.log(`${author.name}-${author.id}`);
}

// 배열 요소의 타입 추출
type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

// PostList[number] : PostList 배열 타입으로부터 요소의 타입을 추출하는 인덱스드 엑세스 타입
// 배열의 요소 타입을 추출할 때에는 인덱스에 number 타입을 넣어주면 됨
// 또 인덱스에 Number Literal 타입을 넣어도 동일하게 동작함
const post2: PostList[number] = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "채형원",
    age: 31,
  },
};

// 튜플의 요소 타입 추출
// 튜플 타입에 인덱스드 엑세스 타입을 사용할 때 인덱스에 number 타입을 넣으면
// 튜플을 배열 처럼 인식해 배열 요소의 타입을 추출하게 됨
type Tup = [number, string, boolean];

type Tup0 = Tup[0]; // number

type Tup1 = Tup[1]; // string

type Tup2 = Tup[2]; // boolean

// 튜플 타입 안에 있는 모든 타입의 최적의 공통 타입을 뽑음 => 세 타입의 유니온 타입
type Tup3 = Tup[number]; // number | string | boolean
