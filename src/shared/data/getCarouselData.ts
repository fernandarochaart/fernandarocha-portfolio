import type { CarouselItem } from "@/types/card";

export function getCarouselData(): CarouselItem[] {
  return [
    {
      id: 1,
      img: "/projects/project-01.jpg",
      alt: "Project 1",
      width: 400,
      height: 400,
      aspectRatio: "square",
    },
    {
      id: 2,
      img: "/projects/project-02.jpg",
      alt: "Ocean wave texture",
      width: 400,
      height: 533,
      aspectRatio: "portrait",
    },
    {
      id: 3,
      img: "/projects/project-03.jpg",
      alt: "Yellow basketballs",
      width: 400,
      height: 400,
      aspectRatio: "square",
    },
    {
      id: 4,
      img: "/projects/project-04.jpg",
      alt: "Concert crowd",
      width: 400,
      height: 533,
      aspectRatio: "portrait",
    },
    {
      id: 5,
      img: "/projects/project-05.jpg",
      alt: "Dark texture graphic",
      width: 400,
      height: 400,
      aspectRatio: "square",
    },
    {
      id: 6,
      img: "/projects/project-06.jpg",
      alt: "Red abstract geometry",
      width: 400,
      height: 533,
      aspectRatio: "portrait",
    },
    {
      id: 7,
      img: "/projects/project-07.jpg",
      alt: "",
      width: 400,
      height: 400,
      aspectRatio: "square",
    },
  ];
}
