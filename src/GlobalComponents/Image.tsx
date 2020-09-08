import React from "react";

interface Props {
  shortName: string;
  size: 100 | 200 | 300 | 400 | 500 | 600;
  style?: React.CSSProperties;
}

export const Image: React.FC<Props> = ({ shortName, size, style }) => (
  <img
    alt="alt text"
    style={style}
    src={`https://ik.imagekit.io/3aek1kxt2/pi-crafters/${shortName}?tr=w-${size}`}
  />
);
