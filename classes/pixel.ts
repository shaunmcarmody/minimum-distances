export interface PixelConfig {
  compareDistance: (position: number[]) => number;
  position: number[];
  value: number;
}

class Pixel implements PixelConfig {
  position: number[];
  
  value: number;

  constructor(position: number[], value = 0) {
    this.position = position;
    this.value = value;
  }

  compareDistance(position: number[]): number {
    const [row1, column1] = this.position;
    const [row2, column2] = position;

    return Math.abs(row1 - row2) + Math.abs(column1 - column2);
  }
}

export default Pixel;
