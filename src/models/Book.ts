export class Book {
  name: string;
  description: string[];
  isLend: boolean;

  constructor(name: string) {
    this.name = name;
    this.isLend = false;
  }
}
