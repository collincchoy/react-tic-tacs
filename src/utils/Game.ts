export function checkForEndGame(cells: string[], size?: number) {
  size = size || Math.floor(Math.sqrt(cells.length));

  function getCommonToken(cells: string[]) {
    return cells.reduce((prev, curr) => {
      return (prev !== '' && prev === curr) ? prev : '';
    })
  }

  // Horizontals
  for (let row = 0; row < size; row++) {
    const startOfRow = row * size;
    const winner = getCommonToken(cells.slice(startOfRow, startOfRow + size));
    if (winner) {
      return winner;
    }
  }

  // Verticals
  for (let col = 0; col < size; col++) {
    const column: string[] = [];
    for (let offset = 0; offset < size*size; offset+=size) {
      column.push(cells[col + offset]);
    }
    const winner = getCommonToken(column);
    if (winner) {
      return winner
    }
  }

  /** Diagonals
   * \ -> 0, 4, 8
   * / -> 2, 4, 6
  */
  const leftDiag: string[] = [];
  for (let i = 0; i < size*size; i+=size+1) {
    leftDiag.push(cells[i]);
  }
  let winner = getCommonToken(leftDiag);
  if (winner) {
    return winner
  }

  const rightDiag: string[] = [];
  for (let i = (size*size)-size; i >= size; i -= size-1) {
    rightDiag.push(cells[i]);
  }
  winner = getCommonToken(rightDiag);
  if (winner) {
    return winner;
  }

  return null;
}