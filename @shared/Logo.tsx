import React, { FC } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const Logo: FC = () => {
  const router = useRouter();

  return (
    <div
      className="relative h-8 w-24 cursor-pointer"
      onClick={() => router.push("/")}
    >
      <Image
        src={"/mainstack-logo.png"}
        layout="fill"
        objectFit="contain"
        objectPosition={"0 50%"}
        alt="The all-in-one platform for entrepreneurs, creators, and businesses to showcase their work, sell products and services with global payment options."
        priority
      />
    </div>
  );
};

export default Logo;
