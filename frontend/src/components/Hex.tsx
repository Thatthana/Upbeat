import { useState } from "react";
import Grid from "./Grid";

export default function Hexgrid() {
  const rows = 12;
  const columns = 10;
  const H = 55;
  const W = (246 / 212) * H;

  const matrix = new Array(rows);
  for (let i = 0; i < rows; i++) {
    matrix[i] = new Array(columns).fill(null);
  }

  const imageNames = Array.from({ length: rows * columns }, (_, i) => {
    const imageNumber = (i % 3) + 1;

    return `l${imageNumber}.png`;
  });

  const shuffledImageNames = shuffleArray(imageNames);

  let imageIndex = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      const imageName = shuffledImageNames[imageIndex];
      matrix[i][j] = imageName;
      imageIndex++;
    }
  }
  matrix[6][6] = "CT.png";
  matrix[0][1] = "g4.png";
  matrix[1][1] = "g2.png";
  matrix[5][1] = "g3.png";
  matrix[3][1] = "g3.png";
  matrix[3][2] = "g6.png";
  matrix[3][7] = "g8.png";
  matrix[3][6] = "g2.png";
  matrix[3][5] = "g9.png";
  matrix[3][4] = "g1.png";

  const [zoomLevel, setZoomLevel] = useState(1);

  const wrapperWidth = `${W * columns * zoomLevel}px`;
  const wrapperHeight = `${H * rows * zoomLevel}px`;

  const transformStyle = `scale(${zoomLevel})`;

  const zoomIn = () => {
    if (zoomLevel < 2) {
      setZoomLevel(zoomLevel + 0.1);
    }
  };

  const zoomOut = () => {
    if (zoomLevel > 0.5) {
      setZoomLevel(zoomLevel - 0.1);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "10px",
        }}
      ></div>
      <div
        style={{
          transform: transformStyle,
          transformOrigin: "top left",
        }}
      >
        <Grid matrix={matrix} W={W} H={H} />
      </div>
    </div>
  );
}

function shuffleArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
