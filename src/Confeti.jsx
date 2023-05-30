import Confetti from "react-confetti";

export const Confeti = ({ show }) => {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  if (show) {
    return <Confetti width={windowWidth} height={windowHeight} />;
  }
};
