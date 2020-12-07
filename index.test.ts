import { createWriteStream, readFileSync } from 'fs';

import main from './index';

describe('compare strings', (): void => {
  it('output for input01.txt should match expected01.txt', (): void => {
    const data: string = readFileSync('./input/input01.txt', 'utf8');
    const output: string = main(data);
    const expected: string = readFileSync('./expected/expected01.txt', 'utf8');
    expect(output).toMatch(expected);
    const ws = createWriteStream('./output/output01.txt');
    ws.write(output);
  });

  it('output for input02.txt should match expected02.txt', (): void => {
    const data: string = readFileSync('./input/input02.txt', 'utf8');
    const output: string = main(data);
    const expected: string = readFileSync('./expected/expected02.txt', 'utf8');
    expect(output).toMatch(expected);
    const ws = createWriteStream('./output/output02.txt');
    ws.write(output);
  });

  it('output for input03.txt should match expected03.txt', (): void => {
    const data: string = readFileSync('./input/input03.txt', 'utf8');
    const output: string = main(data);
    const expected: string = readFileSync('./expected/expected03.txt', 'utf8');
    expect(output).toMatch(expected);
    const ws = createWriteStream('./output/output03.txt');
    ws.write(output);
  });
});
