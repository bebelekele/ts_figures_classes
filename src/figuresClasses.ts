export interface Figure {
  a: number;
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: string = 'triangle';

  public square: number;

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.square = this.getArea();

    if (this.square <= 0) {
      throw new Error('your message');
    }
  }
}

export class Circle implements Figure {
  public square: number;

  public shape: string = 'circle';

  getArea(): number {
    const area = Math.PI * this.a ** 2;

    return Math.floor(area * 100) / 100;
  }

  constructor(
    public color: string,
    public a: number,
  ) {
    if (this.a <= 0) {
      throw new Error('your message');
    }

    this.square = this.getArea();

    if (this.square <= 0) {
      throw new Error('your message');
    }
  }
}

export class Rectangle implements Figure {
  public square: number;

  public shape: string = 'rectangle';

  getArea(): number {
    return this.a * this.b;
  }

  constructor(
    public color: string,
    public a: number,
    public b: number,
  ) {
    this.square = this.getArea();

    if (this.square <= 0) {
      throw new Error('your message');
    }
  }
}

export function getInfo(figure: Triangle | Rectangle | Circle): string {
  return `A ${figure.color} ${figure.shape} - ${figure.square}`;
}
