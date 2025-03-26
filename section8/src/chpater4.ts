// 템플릿 리터럴 타입
// 타입 조작 기능들 중 가장 단순한 기능으로
// 템플릿 리터럴을 이용해 특정 패턴을 갖는 String 타입을 만드는 기능

type Color = "red" | "black" | "green";
type Animal = "dog" | "cat" | "monkey";

type ColoredAnimal = `${Color}-${Animal}`;
// ColoredAnimal = "red-dog" | "red-cat" | "red-monkey" |
// "black-dog" | "black-cat" | "black-monkey" | "green-dog" |
// "green-cat" | "green-monkey"
