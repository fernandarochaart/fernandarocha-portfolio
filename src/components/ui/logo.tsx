import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/static/logo-clean.png"
      width={500}
      height={500}
      alt="Fernanda Rocha"
      priority={true}
    />
  );
}
