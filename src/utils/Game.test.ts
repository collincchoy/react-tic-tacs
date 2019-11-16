import { checkForEndGame } from './Game';

test("knows when game is not over", () => {
  const board = ['', 'X', '',
                'O', '', 'X',
                'O', 'X', 'O'];
  expect(checkForEndGame(board)).toBeFalsy();
})

describe("calculates end game for horizontals", () =>  {
  it("works for top row", () => {
    const board = ['X', 'X', 'X',
                  '', '', '',
                  '', '', ''];
    expect(checkForEndGame(board)).toBe('X');
  });
  it("works for second row", () => {
    const board = ['', '', '',
                  'X', 'X', 'X',
                  '', '', ''];
    expect(checkForEndGame(board)).toBe('X');
  });
  it("works for last row", () => {
    const board = ['', '', '',
                  '', '', '',
                  'O', 'O', 'O'];
    expect(checkForEndGame(board)).toBe('O');
  });
});

describe("calculates end game for verticals", () =>  {
  it("works for left col", () => {
    const board = ['X', 'O', 'O',
                  'X', '', '',
                  'X', '', ''];
    expect(checkForEndGame(board)).toBe('X');
  });
  it("works for middle col", () => {
    const board = ['', 'O', '',
                  'X', 'O', 'X',
                  '', 'O', ''];
    expect(checkForEndGame(board)).toBe('O');
  });
  it("works for last col", () => {
    const board = ['', '', 'O',
                  '', '', 'O',
                  'O', 'X', 'O'];
    expect(checkForEndGame(board)).toBe('O');
  });
});

describe("calculates end game for diagonals", () =>  {
  it("works for \\", () => {
    const board = ['X', 'O', 'O',
                  'X', 'X', '',
                  'O', '', 'X'];
    expect(checkForEndGame(board)).toBe('X');
  });
  it("works for /", () => {
    const board = ['', 'X', 'O',
                  'X', 'O', 'X',
                  'O', 'X', ''];
    expect(checkForEndGame(board)).toBe('O');
  });
});
