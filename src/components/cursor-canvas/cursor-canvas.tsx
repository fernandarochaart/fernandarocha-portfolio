import { useEffect, useRef } from "react";
import { cursorTrail } from "@/lib/cursor-trail";
import type { CursorTrailCanvasProps } from "@/types/cursor";

export default function CursorTrailCanvas(props: CursorTrailCanvasProps) {
  const refCanvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const trail = cursorTrail({ ref: refCanvas, color: props.color });
    if (!trail) {
      return;
    }

    const { cleanUp, renderTrailCursor } = trail;
    renderTrailCursor();
    return () => cleanUp();
  }, [props.color]);
  return (
    <canvas
      ref={refCanvas}
      className={props.className}
      style={props.style}
    ></canvas>
  );
}
