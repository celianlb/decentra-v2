import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        src="/assets/logo-decentra-white.svg"
        alt="logo"
        width={100}
        height={100}
      />
    </Link>
  );
}
