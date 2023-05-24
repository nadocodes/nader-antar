import React, { useState, useEffect } from "react";
import "./MemoryGame.css";

/* Function to shuffle the array */
function shuffleArray(array: number[][]): number[][] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

/* Main App */
const MemoryGame = (): JSX.Element => {
  const [grid, setGrid] = useState<number[][]>([
    [0, 3, 5],
    [1, 2, 2],
    [4, 3, 5],
    [1, 4, 0],
  ]);

  /* useState to flip the cards */
  const [isFlipped, setIsFlipped] = useState<boolean[][]>(
    new Array(grid.length)
      .fill(null)
      .map(() => new Array(grid[0].length).fill(false))
  );

  useEffect(() => {
    setGrid((prevGrid) => shuffleArray(prevGrid));
  }, []);

  const [previousCard, setPreviousCard] = useState<{ row: number; col: number } | undefined>();

  /* Function to handle the card clicked */
  const handleCardClicked = (rowIndex: number, colIndex: number): void => {
    if (isFlipped[rowIndex][colIndex]) {
      return;
    }

    const clickedNumber: number = grid[rowIndex][colIndex];
    const newIsFlipped: boolean[][] = [...isFlipped];
    newIsFlipped[rowIndex][colIndex] = true;
    setIsFlipped(newIsFlipped);

    /* If the previous card is not undefined */
    if (previousCard) {
      const previousCardNumber: number = grid[previousCard.row][previousCard.col];

      /* If the previous card is not equal to the clicked card */
      if (previousCardNumber !== clickedNumber) {
        setTimeout(() => {
          newIsFlipped[rowIndex][colIndex] = false;
          newIsFlipped[previousCard.row][previousCard.col] = false;
          setIsFlipped([...newIsFlipped]);
        }, 1000 / 2);
      }
      setPreviousCard(undefined);
    } else {
      setPreviousCard({
        row: rowIndex,
        col: colIndex,
      });
    }
  };

  /* Function to handle the reset button */
  const handleReset = (): void => {
    setGrid((prevGrid) => shuffleArray(prevGrid));
    setIsFlipped(
      new Array(grid.length)
        .fill(null)
        .map(() => new Array(grid[0].length).fill(false))
    );
  };

  return (
    <div className="MemoryGame">
      <div className="gridMG">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="rowMG">
            {row.map((number, colIndex) => (
              <div
                onClick={() => handleCardClicked(rowIndex, colIndex)}
                key={colIndex}
                className={"cardMG " + (isFlipped[rowIndex][colIndex] ? "revealed" : "")}
              >
                {isFlipped[rowIndex][colIndex] ? number : " "}
              </div>
            ))}
          </div>
        ))}
      </div>
      {isFlipped.flat().every((card) => card === true) && (
        <div>
          <h3 className="winMG">You Win!</h3>{" "}
          <button className='MGBtn' onClick={handleReset} >Reset</button>
        </div>
      )}
    </div>
  );
};

export default MemoryGame;
