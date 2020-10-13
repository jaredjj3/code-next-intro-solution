import React, { useState, useEffect } from 'react';

const MOUSE_TRACKER_STYLE = {
  border: '2px solid red', 
  width: '500px', 
  height: '500px'
}

export const MouseTracker = () => {
  const [renderCount, setRenderCount] = useState(0);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    setRenderCount(renderCount + 1);
  }, [x, y])

  const updateCoords = (e) => {
    setX(e.pageX);
    setY(e.pageY);
  };

  return (
    <>
      <div>render count: {renderCount}</div>
      <div>(x, y): ({x}, {y})</div>
      <br />
      <div style={MOUSE_TRACKER_STYLE} onMouseMove={updateCoords} />
    </>
  );
}