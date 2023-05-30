import { useState } from "react";
import { Square } from "./Square";
import { Confeti } from "./Confeti";

function searchWin(currentSquares, winningMoves, currentPlayer) {
  const currentPlayerMovements = currentSquares.filter(
    (square) => square.value === currentPlayer
  );

  const idCurrentMovements = currentPlayerMovements
    .map((square) => square.id.toString())
    .join("");

  const winningSquares = winningMoves.map((play) => {
    const contieneSecuencia = new RegExp([...play].join(".*")).test(
      idCurrentMovements
    );
    if (contieneSecuencia) {
      return [true, play];
    } else {
      return [false, play];
    }
  });
  return winningSquares.find((array) => array[0] === true) ?? [false];
}

function markingWinningMoves(currentSquares, playsWins) {
  const squaresMarked = currentSquares.map((square) => {
    if (playsWins.includes(square.id)) {
      return {
        ...square,
        state: false,
        bgColor: "green",
      };
    } else {
      return {
        ...square,
        state: false,
      };
    }
  });
  return squaresMarked;
}

function updateSquares(currentSquares, squareID, currentPlayer) {
  const squares = currentSquares.map((square) => {
    if (square.id === squareID) {
      if (currentPlayer === "X") {
        return {
          id: squareID,
          value: currentPlayer,
          state: false,
          bgColor: "#a20c0a",
        };
      } else {
        return {
          id: squareID,
          value: currentPlayer,
          state: false,
          bgColor: "#207fd8",
        };
      }
    }
    return square;
  });
  return squares;
}

export const Board = () => {
  const playsWins = ["123", "456", "789", "159", "357", "147", "258", "369"];
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [playerWin, setPlayerWin] = useState("None");
  const [showConfetti, setShowConfetti] = useState(false);
  const [squares, setSquares] = useState([
    { id: 1, value: "", state: true, bgColor: "#cec9ff" },
    { id: 2, value: "", state: true, bgColor: "#cec9ff" },
    { id: 3, value: "", state: true, bgColor: "#cec9ff" },
    { id: 4, value: "", state: true, bgColor: "#cec9ff" },
    { id: 5, value: "", state: true, bgColor: "#cec9ff" },
    { id: 6, value: "", state: true, bgColor: "#cec9ff" },
    { id: 7, value: "", state: true, bgColor: "#cec9ff" },
    { id: 8, value: "", state: true, bgColor: "#cec9ff" },
    { id: 9, value: "", state: true, bgColor: "#cec9ff" },
  ]);
  const Play = (squareID) => {
    const currentSquares = updateSquares(squares, squareID, currentPlayer);
    setSquares(currentSquares);
    if (searchWin(currentSquares, playsWins, currentPlayer)[0]) {
      const winningSquares = searchWin(
        currentSquares,
        playsWins,
        currentPlayer
      )[1];
      setPlayerWin(currentPlayer);
      setSquares(markingWinningMoves(currentSquares, winningSquares));
      setShowConfetti(true);
    } else {
      if (currentSquares.every((square) => square.state === false)) {
        setPlayerWin("Nobody Won :(");
      }
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  };

  const Reset = () => {
    setSquares([
      { id: 1, value: "", state: true, bgColor: "#cec9ff" },
      { id: 2, value: "", state: true, bgColor: "#cec9ff" },
      { id: 3, value: "", state: true, bgColor: "#cec9ff" },
      { id: 4, value: "", state: true, bgColor: "#cec9ff" },
      { id: 5, value: "", state: true, bgColor: "#cec9ff" },
      { id: 6, value: "", state: true, bgColor: "#cec9ff" },
      { id: 7, value: "", state: true, bgColor: "#cec9ff" },
      { id: 8, value: "", state: true, bgColor: "#cec9ff" },
      { id: 9, value: "", state: true, bgColor: "#cec9ff" },
    ]);
    setShowConfetti(false);
    setCurrentPlayer("X");
    setPlayerWin("None");
  };

  return (
    <div className="containerStyle">
      <Confeti show={showConfetti} />
      <div id="winnerArea" className="instructionsStyle">
        Winner: <span>{playerWin}</span>
      </div>
      <div id="statusArea" className="instructionsStyle">
        Next player: <span>{currentPlayer}</span>
      </div>
      <div className="boardStyle">
        <div className="rowStyle">
          <Square
            onClick={() => Play(1)}
            value={squares[0].value}
            enabled={squares[0].state}
            bgColor={squares[0].bgColor}
          />
          <Square
            onClick={() => Play(2)}
            value={squares[1].value}
            enabled={squares[1].state}
            bgColor={squares[1].bgColor}
          />
          <Square
            onClick={() => Play(3)}
            value={squares[2].value}
            enabled={squares[2].state}
            bgColor={squares[2].bgColor}
          />
        </div>
        <div className="rowStyle">
          <Square
            onClick={() => Play(4)}
            value={squares[3].value}
            enabled={squares[3].state}
            bgColor={squares[3].bgColor}
          />
          <Square
            onClick={() => Play(5)}
            value={squares[4].value}
            enabled={squares[4].state}
            bgColor={squares[4].bgColor}
          />
          <Square
            onClick={() => Play(6)}
            value={squares[5].value}
            enabled={squares[5].state}
            bgColor={squares[5].bgColor}
          />
        </div>
        <div className="rowStyle">
          <Square
            onClick={() => Play(7)}
            value={squares[6].value}
            enabled={squares[6].state}
            bgColor={squares[6].bgColor}
          />
          <Square
            onClick={() => Play(8)}
            value={squares[7].value}
            enabled={squares[7].state}
            bgColor={squares[7].bgColor}
          />
          <Square
            onClick={() => Play(9)}
            value={squares[8].value}
            enabled={squares[8].state}
            bgColor={squares[8].bgColor}
          />
        </div>
      </div>
      <button onClick={() => Reset()} className="buttonStyle">
        Reset
      </button>
    </div>
  );
};
