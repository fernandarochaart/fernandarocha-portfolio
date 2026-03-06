import type { CursorTrail, LineProps } from "@/types/cursor";

export function cursorTrail(props: CursorTrail) {
  const { ref, color } = props;
  if (!ref.current) {
    return null;
  }

  const ctx = ref.current.getContext("2d")!;

  if (!ctx) {
    return null;
  }

  function resolveColor(): string {
    if (color) {
      return color;
    }
    const raw = getComputedStyle(document.documentElement)
      .getPropertyValue("--foreground")
      .trim();

    return raw ? `oklch(${raw})` : "oklch(0.147 0.004 49.25)";
  }

  const trailColor = resolveColor();

  let AnimationFeature = {
    friction: 0.5,
    trails: 20,
    size: 40,
    dampening: 0.2,
    tension: 0.98,
  };

  let cursorPosition = { x: 0, y: 0 };
  let running = true;

  class NewNode {
    x = 0;
    y = 0;
    vy = 0;
    vx = 0;
  }

  class Line {
    spring: number;
    friction: number;
    nodes: NewNode[];

    constructor(e: LineProps) {
      this.spring = e.spring + 0.1 * Math.random() - 0.05;
      this.friction = AnimationFeature.friction + 0.01 * Math.random() - 0.005;
      const pos = e.cursorPosition ?? { x: 0, y: 0 };
      this.nodes = Array.from({ length: AnimationFeature.size }, () => {
        const node = new NewNode();
        node.x = pos.x;
        node.y = pos.y;
        return node;
      });
    }

    update(): void {
      let e = this.spring;
      let t = this.nodes[0];
      t.vx += (cursorPosition.x - t.x) * e;
      t.vy += (cursorPosition.y - t.y) * e;

      for (let i = 0; i < this.nodes.length; i++) {
        t = this.nodes[i];
        if (i > 0) {
          const n = this.nodes[i - 1];
          t.vx += (n.x - t.x) * e;
          t.vy += (n.y - t.y) * e;
          t.vx += n.vx * AnimationFeature.dampening;
          t.vy += n.vy * AnimationFeature.dampening;
        }
        t.vx *= this.friction;
        t.vy *= this.friction;
        t.x += t.vx;
        t.y += t.vy;
        e *= AnimationFeature.tension;
      }
    }

    draw(): void {
      let n = this.nodes[0].x;
      let i = this.nodes[0].y;
      ctx.beginPath();
      ctx.moveTo(n, i);

      for (let a = 1; a < this.nodes.length - 2; a++) {
        const e = this.nodes[a];
        const t = this.nodes[a + 1];
        n = 0.5 * (e.x + t.x);
        i = 0.5 * (e.y + t.y);
        ctx.quadraticCurveTo(e.x, e.y, n, i);
      }

      const e = this.nodes[this.nodes.length - 2];
      const t = this.nodes[this.nodes.length - 1];
      ctx.quadraticCurveTo(e.x, e.y, t.x, t.y);
      ctx.stroke();
      ctx.closePath();
    }
  }

  let newLines: Line[] = [];

  function renderAnimation() {
    if (!running) {
      return;
    }
    ctx.globalCompositeOperation = "source-over";
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.globalCompositeOperation = "lighter";
    ctx.strokeStyle = trailColor;
    ctx.globalAlpha = 0.35;
    ctx.lineWidth = 1;

    for (let t = 0; t < AnimationFeature.trails; t++) {
      if (newLines[t]) {
        newLines[t].update();
        newLines[t].draw();
      }
    }

    window.requestAnimationFrame(renderAnimation);
  }

  function move(event: MouseEvent | TouchEvent) {
    if (event instanceof MouseEvent) {
      cursorPosition.x = event.clientX;
      cursorPosition.y = event.clientY;
    } else {
      cursorPosition.x = event.touches[0].pageX;
      cursorPosition.y = event.touches[0].pageY;
    }
    event.preventDefault();
  }

  function createLine(event: TouchEvent) {
    if (event.touches.length === 1) {
      cursorPosition.x = event.touches[0].pageX;
      cursorPosition.y = event.touches[0].pageY;
    }
  }

  function onMouseMove(e: MouseEvent | TouchEvent) {
    newLines = Array.from(
      { length: AnimationFeature.trails },
      (_, i) =>
        new Line({ spring: 0.45 + (i / AnimationFeature.trails) * 0.025 }),
    );

    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("touchstart", onMouseMove);
    document.addEventListener("mousemove", move);
    document.addEventListener("touchmove", createLine);
    document.addEventListener("touchstart", createLine);
    move(e);
    renderAnimation();
  }

  function resizeCanvas() {
    ctx.canvas.width = window.innerWidth - 20;
    ctx.canvas.height = window.innerHeight;
  }

  function stopAnimation() {
    running = false;
  }

  function startAnimation() {
    if (!running) {
      running = true;
      renderAnimation();
    }
  }

  function renderTrailCursor() {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("touchstart", onMouseMove);
    window.addEventListener("orientationchange", resizeCanvas);
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("focus", startAnimation);
    window.addEventListener("blur", stopAnimation);
    resizeCanvas();
  }

  function cleanUp() {
    document.removeEventListener("mousemove", move);
    document.removeEventListener("touchmove", createLine);
    document.removeEventListener("touchstart", createLine);
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("touchstart", onMouseMove);
    window.removeEventListener("orientationchange", resizeCanvas);
    window.removeEventListener("resize", resizeCanvas);
    window.removeEventListener("focus", startAnimation);
    window.removeEventListener("blur", stopAnimation);
  }

  return { cleanUp, renderTrailCursor, stopAnimation, startAnimation };
}
