export const Square = ({ onClick, value, enabled, bgColor }) => {
  const squareStyle = {
    width: "30%",
    height: "100%",
    backgroundColor: bgColor,
    margin: "4px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    borderRadius: "10px",
  };

  if (enabled) {
    return (
      <div onClick={() => onClick()} className="square" style={squareStyle}>
        <p className="valueStyle">{value}</p>
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
