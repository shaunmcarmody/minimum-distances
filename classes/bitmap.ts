import type { PixelConfig } from './pixel';

export interface BitmapConfig {
  addBlackPixel: (pixel: PixelConfig) => void;
  addWhitePixel: (pixel: PixelConfig) => void;
  blackPixelArray: PixelConfig[];
  createMatrix: (rows: number, columns: number) => number[][];
  distances: number[][];
  updateMatrix: (position: number[], distance: number) => void;
  whitePixelArray: PixelConfig[];
}

class Bitmap implements BitmapConfig {
  blackPixelArray: PixelConfig[];

  distances: number[][];

  whitePixelArray: PixelConfig[];

  constructor(rows: number, columns: number) {
    this.blackPixelArray = [];
    this.distances = this.createMatrix(rows, columns);
    this.whitePixelArray = [];
  }

  addBlackPixel(pixel: PixelConfig): void {
    this.blackPixelArray.push(pixel);
  }

  addWhitePixel(pixel: PixelConfig): void {
    this.whitePixelArray.push(pixel);
  }

  createMatrix(rows: number, columns: number): number[][] {
    return Array.from(new Array(rows), (): number[] =>
      new Array(columns).fill(0)
    );
  }

  updateMatrix(position: number[], distance: number): void {
    const [row, column] = position;
    this.distances[row][column] = distance;
  }
}

export default Bitmap;
