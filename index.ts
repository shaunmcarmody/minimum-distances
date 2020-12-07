import { Bitmap, BitmapConfig, Pixel } from './classes';

let currentLine: number = 0;

const minimumDistances = (totalCases: number, caseArray: string[]): number[][][] => {
  const outputArray: number[][][] = [];

  for (let count = 0; count < totalCases; count += 1) {
    const [totalRows, totalColumns]: number[] = caseArray[currentLine]
      .split(' ')
      .map((string: string): number => parseInt(string, 10));

    currentLine += 1;

    const bitmap: BitmapConfig = new Bitmap(totalRows, totalColumns);

    for (let row: number = 0; row < totalRows; row += 1) {
      for (let column: number = 0; column < totalColumns; column += 1) {
        const value: number = parseInt(caseArray[currentLine][column], 10);
        const pixel = new Pixel([row, column], value);

        if (pixel.value === 1) {
          bitmap.addWhitePixel(pixel);
        } else {
          bitmap.addBlackPixel(pixel);
        }
      }

      currentLine += 1;
    }

    for (const blackPixel of bitmap.blackPixelArray) {
      let minDistance: number = totalRows - 1 + (totalColumns - 1);

      for (const whitePixel of bitmap.whitePixelArray) {
        const distance = blackPixel.compareDistance(whitePixel.position);

        if (distance < minDistance) {
          minDistance = distance;
        }
      }

      bitmap.updateMatrix(blackPixel.position, minDistance);
    }

    currentLine += 1;
    outputArray.push(bitmap.distances);
  }

  return outputArray;
};

const main = (data: string): string => {
  const inputArray: string[] = data
    .replace(/\s*$/u, '')
    .split('\n')
    .map((string: string): string => string.replace(/\s*$/u, ''));

  const outputArray: number[][][] = minimumDistances(
    parseInt(inputArray[0], 10),
    inputArray.slice(1)
  );

  let outputString: string = '';

  for (const result of outputArray) {
    let resultString: string = '';

    for (const row of result) {
      const rowString = `${row.join(' ')}\n`;
      resultString += rowString;
    }

    outputString += `${resultString}\n`;
  }

  // Reset current line for next test
  currentLine = 0;

  return outputString.trim();
};

export default main;
