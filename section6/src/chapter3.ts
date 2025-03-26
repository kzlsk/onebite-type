// 인터페이스와 클래스

// 인터페이스로 정의하는 필드들은 무조건 public
interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

// 인터페이스를 클래스와 implements 키워드와 함께 사용하면
// 이 클래스가 생성하는 객체는 모두 인터페이스 타입을 만족하도록 클래스를 구현해야 함
class Character implements CharacterInterface {
  constructor(public name: string, public moveSpeed: number) {}
  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동`);
  }
}
