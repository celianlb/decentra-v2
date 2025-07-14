import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/assets/logo-decentra-white.svg"
      alt="logo"
      width={100}
      height={100}
    />
  );
}
