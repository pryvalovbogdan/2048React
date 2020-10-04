let someArr = [];

export const swipeNumbersLeftTop = (initialArr, setInitialNumbers, leftSide) => {
  for (let k = 0; k < 4; k++) {
    let i = 0;
    for (let j = 1; j < 4; j++) {
      someArr.push(initialArr[k][i], initialArr[k][j]);
      let [firstInd, secondInd,  thirdInd, fourthInd] = [
        leftSide ? k : i, leftSide ? k : j, leftSide ? i : k, leftSide ? j : k
      ];
      if (initialArr[firstInd][thirdInd] === 0 && initialArr[secondInd][fourthInd] !== 0) {
        initialArr[firstInd][thirdInd] = initialArr[secondInd][fourthInd];
        initialArr[secondInd][fourthInd] = 0;
        i++;
      } else if (initialArr[firstInd][thirdInd] !== 0 && initialArr[secondInd][fourthInd] !== 0) {
        if (initialArr[firstInd][thirdInd] === initialArr[secondInd][fourthInd]) {
          initialArr[firstInd][thirdInd] = initialArr[firstInd][thirdInd] + initialArr[secondInd][fourthInd];
          initialArr[secondInd][fourthInd] = 0;
          i++;
        } else {
          i++;
        }
      } else if (initialArr[firstInd][thirdInd] !== 0 && initialArr[secondInd][fourthInd] === 0) {
        i++;
      }
    }
  }
  setInitialNumbers(initialArr);
  const isNull = someArr.filter(num => num === 0);
  someArr = [];
  return isNull
};

export const swipeNumbersDown = (initialNumbersArr, setInitialNumbers) => {
  for (let k = 3; k >= 0; k--) {
    let i = 0;
    for (let j = 1; j < 4; j++) {
      someArr.push(initialNumbersArr[k][i], initialNumbersArr[k][j]);
      if (initialNumbersArr[i][k] === 0 && initialNumbersArr[j][k] !== 0) {
        i++;
      } else if (initialNumbersArr[i][k] !== 0 && initialNumbersArr[j][k] !== 0) {
        if (initialNumbersArr[i][k] === initialNumbersArr[j][k]) {
          initialNumbersArr[j][k] = initialNumbersArr[i][k] + initialNumbersArr[j][k];
          initialNumbersArr[i][k] = 0;
          i++;
        } else {
          i++;
        }
      } else if (initialNumbersArr[i][k] !== 0 && initialNumbersArr[j][k] === 0) {
        initialNumbersArr[j][k] = initialNumbersArr[i][k];
        initialNumbersArr[i][k] = 0;
        i++;
      }
    }
  }
  setInitialNumbers(initialNumbersArr);
  let isNull = someArr.filter(num => num === 0);
  someArr = [];
  return isNull
};

export const swipeNumbersRight = (initialNumbersArr, setInitialNumbers) => {
  for (let k = 0; k < 4; k++) {
    let i = initialNumbersArr[k].length - 1;
    for (let j = initialNumbersArr[k].length - 2; j >= 0; j--) {
      someArr.push(initialNumbersArr[k][i], initialNumbersArr[k][j]);
      if (initialNumbersArr[k][i] === 0 && initialNumbersArr[k][j] !== 0) {
        initialNumbersArr[k][i] = initialNumbersArr[k][j];
        initialNumbersArr[k][j] = 0;
        i--;
      } else if (initialNumbersArr[k][i] !== 0 && initialNumbersArr[k][j] !== 0) {
        if (initialNumbersArr[k][i] === initialNumbersArr[k][j]) {
          initialNumbersArr[k][i] = initialNumbersArr[k][i] + initialNumbersArr[k][j];
          initialNumbersArr[k][j] = 0;
          i--;
        }
      } else if (initialNumbersArr[k][i] !== 0 && initialNumbersArr[k][j] === 0) {
        initialNumbersArr[k][j] = initialNumbersArr[k][i];
        initialNumbersArr[k][j] = 0;
        i--;
      }
    }
  }
  setInitialNumbers(initialNumbersArr);
  let isNull = someArr.filter(num => num === 0);
  someArr = [];
  return isNull
};

export const getColor = (num) => {
  switch (num) {
    case 2:
      return '#EBDCD0';
    case 4:
      return '#E9DBBA';
    case 8:
      return '#E9A067';
    case 16:
      return '#F08151';
    case 32:
      return '#F2654F';
    case 64:
      return '#F1462C';
    case 128:
      return '#E7C65E';
    case 256:
      return '#E8C350';
    case 512:
      return '#E8BE40';
    case 1024:
      return '#E8BB31';
    case 2048:
      return '#E7B723';
    default:
      return '#C2B3A3';
  }
};