import type { CSSProperties, RefObject } from "react";

export interface CursorTrailCanvasProps {
  color?: string;
  className?: string;
  style?: CSSProperties;
}

export type CursorTrail = {
  ref: RefObject<HTMLCanvasElement | null>;
  color?: string;
};

export type LineProps = {
  spring: number;
  cursorPosition?: { x: number; y: number };
};
