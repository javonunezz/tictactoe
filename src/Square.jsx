export const Square = ({ onClick, value, enabled, bgColor }) => {
  const squareStyle = {
    width: "100%",
    height: "100%",
    backgroundColor: bgColor,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    borderRadius: "10px",
    fontSize: "100px",
  };

  if (enabled) {
    return (
      <div onClick={() => onClick()} className="square" style={squareStyle}>
        <p className="valueStyle">{"\u200B"}</p>
      </div>
    );
  } else {
    return (
      <div className="square" style={squareStyle}>
        <p className="valueStyle">{value}</p>
      </div>
    );
  }
};
