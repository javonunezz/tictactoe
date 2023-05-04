import { useState } from "react";
import { Square } from "./Square";

const rowStyle = {
  display: "flex",
};

export const Board = () => {
  const playsWins = ["123", "456", "789", "159", "357", "147", "258", "369"];
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [playerWin, setPlayerWin] = useState("None");
  const [squares, setSquares] = useState([
    { id: 1, value: "", state: true, bgColor: "#b4d3eb" },
    { id: 2, value: "", state: true, bgColor: "#b4d3eb" },
    { id: 3, value: "", state: true, bgColor: "#b4d3eb" },
    { id: 4, value: "", state: true, bgColor: "#b4d3eb" },
    { id: 5, value: "", state: true, bgColor: "#b4d3eb" },
    { id: 6, value: "", state: true, bgColor: "#b4d3eb" },
    { id: 7, value: "", state: true, bgColor: "#b4d3eb" },
    { id: 8, value: "", state: true, bgColor: "#b4d3eb" },
    { id: 9, value: "", state: true, bgColor: "#b4d3eb" },
  ]);

  const Play = (squareID) => {
    setSquares((prevSquares) => {
      const updateSquares = prevSquares.map((square) => {
        if (square.id === squareID) {
          if (currentPlayer == "X") {
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

      const gamesPlayed = updateSquares
        .filter((square) => square.value == currentPlayer)
        .reduce((sum, current) => {
          return sum + current.id.toString();
        }, "")
        .split("");
      const winplayer = playsWins.map((gamewin) =>
        gamewin.split("").every((char) => gamesPlayed.includes(char))
      );
      if (winplayer.find((play) => play == true)) {
        setPlayerWin(currentPlayer);
        setSquares(
          updateSquares.map((square) => {
            if (gamesPlayed.includes(square.id.toString())) {
              return {
                id: square.id,
                value: square.value,
                state: false,
                bgColor: "green",
              };
            }
            return {
              id: square.id,
              value: square.value,
              state: false,
              bgColor: square.bgColor,
            };
          })
        );
        console.log(gamesPlayed);
      }
      console.log(winplayer);
      return updateSquares;
    });
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
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
    setCurrentPlayer("X");
    setPlayerWin("None");
  };

  return (
    <div className="containerStyle">
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
