import { useState, useCallback, useEffect } from 'react';
import { swipeNumbersRight, swipeNumbersDown, swipeNumbersLeftTop } from './logic';

const useGameHook = () => {
  const initialNumbersArr = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];

  const [initialNumbers, setInitialNumbers] = useState(initialNumbersArr);

  const isEnd = [];

  const checkGameOver = useCallback(() => {
    if(isEnd.length === 4){
      alert(
        'end game'
      );
      setInitialNumbers(initialNumbersArr);
      isEnd.length = 0;
      return true;
    }
  }, [isEnd]);

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
  }, [initialNumbers]);


  const checkIsNoSwipeAvailable = useCallback((isNull, side ) => {
    if(isNull.length){
      addRandomNumber()
    } else {
      const leftIsENd = isEnd.filter(item => item[side] === 0);
      !leftIsENd.length && isEnd.push({ [side]: isNull.length });
    }
  }, []);

  const keyHandleCallback = useCallback(e => {
    if(checkGameOver()){
      window.location.reload();
      return;
    }

    let isNull = null;

    switch (e.key) {
      case 'ArrowLeft':
        isNull = swipeNumbersLeftTop(initialNumbers, setInitialNumbers, true);
        checkIsNoSwipeAvailable(isNull, 'left');
        break;
      case 'ArrowRight':
        isNull = swipeNumbersRight(initialNumbers, setInitialNumbers);
        checkIsNoSwipeAvailable(isNull, 'right');
        break;
      case 'ArrowUp':
        isNull = swipeNumbersLeftTop(initialNumbers, setInitialNumbers, false);
        checkIsNoSwipeAvailable(isNull, 'up');
        break;
      case 'ArrowDown':
        isNull = swipeNumbersDown(initialNumbers, setInitialNumbers);
        checkIsNoSwipeAvailable(isNull, 'down');
        break;
      default:
        break;
    }
  }, [initialNumbers]);

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