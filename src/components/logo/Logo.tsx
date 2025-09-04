import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <>
      <Link href="/" className="flex items-center space-x-2">
        <Image src="/DC.png" alt="DC G6" width={80} height={80} priority />
        <span className="text-xl font-bold text-white">Diego Cabré</span>
      </Link>
    </>
  );
};
