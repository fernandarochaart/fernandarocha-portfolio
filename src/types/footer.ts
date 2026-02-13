import type { IconType } from "react-icons";

export type SocialLink = {
  icon: IconType;
  href: string;
  label: string;
};

export type FooterLink = {
  href: string;
  label: string;
};

export type FooterSection = "product" | "company" | "legal";
