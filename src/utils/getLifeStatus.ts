export const getLifeStatus = (statusArray: number[][]): number[][] => {
  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  const arrayRow = statusArray.length;
  const arrayCol = statusArray[0].length;

  for (let i = 0; i < arrayRow; i++) {
    for (let j = 0; j < arrayCol; j++) {
      let liveCount = 0;
      for (let d = 0; d < directions.length; d++) {
        const dx = i + directions[d][0];
        const dy = j + directions[d][1];
        if (
          dx >= 0 &&
          dx < arrayRow &&
          dy >= 0 &&
          dy < arrayCol &&
          (statusArray[dx][dy] === 1 || statusArray[dx][dy] === 2)
        ) {
          liveCount++;
        }
      }

      if (statusArray[i][j] === 0) {
        if (liveCount === 3) {
          statusArray[i][j] = 3;
        }
      } else {
        if (liveCount < 2 || liveCount > 3) {
          statusArray[i][j] = 2;
        }
      }
    }
  }

  for (let i = 0; i < arrayRow; i++) {
    for (let j = 0; j < arrayCol; j++) {
      if (statusArray[i][j] === 2) {
        statusArray[i][j] = 0;
      } else if (statusArray[i][j] === 3) {
        statusArray[i][j] = 1;
      }
    }
  }

	return statusArray;
};
