import { useState, useCallback, useEffect } from 'react';
import { swipeNumbersLeft, swipeNumbersRight, swipeNumbersTop, swipeNumbersDown } from './logic';

const useGameHook = () => {
  const [initialNumbers, setInitialNumbers] = useState([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]);
  const initialNumbersArr = [...initialNumbers];

  const checkGameOver = useCallback(() => {

  }, []);

  const addRandomNumber = useCallback(() => {
    let isNumberAdded = false;

    while (!isNumberAdded) {
      let num1 = Math.floor(Math.random() * 4);
      let num2 = Math.floor(Math.random() * 4);

      if (initialNumbers[num1][num2] === 0) {
        initialNumbers[num1][num2] = Math.random() > 0.5 ? 2 : 4;
        isNumberAdded = true;
        setInitialNumbers(initialNumbers.slice());
      }
    }
  }, []);

  const keyHandleCallback = useCallback((e) => {
    switch (e.key) {
      case 'ArrowLeft':
        swipeNumbersLeft(initialNumbersArr, setInitialNumbers);
        addRandomNumber();
        break;
      case 'ArrowRight':
        swipeNumbersRight(initialNumbersArr, setInitialNumbers);
        addRandomNumber();
        break;
      case 'ArrowUp':
        swipeNumbersTop(initialNumbersArr, setInitialNumbers);
        addRandomNumber();
        break;
      case 'ArrowDown':
        swipeNumbersDown(initialNumbersArr, setInitialNumbers);
        addRandomNumber();
        break;
      default:
        break;
    }
  }, []);

  useEffect(() => {
    addRandomNumber();
    addRandomNumber();

    document.addEventListener('keydown', keyHandleCallback);
    return () => {
      document.removeEventListener('keydown', keyHandleCallback);
    };
  }, []);

  return {
    initialNumbers,
  };
};

export default useGameHook;