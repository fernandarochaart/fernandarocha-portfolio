export type AspectRatio = "square" | "portrait" | "landscape";

export type CarouselItem = {
  id: number;
  img: string;
  alt: string;
  width: number;
  height: number;
  aspectRatio: AspectRatio;
};
