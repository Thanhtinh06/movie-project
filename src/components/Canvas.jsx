import React from "react";

const Canvas = () => {
  return (
    <div>
      <canvas
        className="upper-canvas maker-canvas"
        width={1392}
        height={1114}
        style={{
          position: "absolute",
          width: 696,
          height: 557,
          left: 0,
          top: 0,
          touchAction: "none",
          userSelect: "none",
          cursor: "move",
        }}
      />
    </div>
  );
};

export default Canvas;
