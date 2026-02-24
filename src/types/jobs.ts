export type Job = {
  id: string;
  year: string;
  categoryKey: string;
  titleKey: string;
  descriptionKey: string;
  tagsKeys: string[];
  image: string;
  link?: string;
};
