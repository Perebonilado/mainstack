import React, { FC } from "react";
import Image from "next/image";
import c from "classnames";
import s from "./styles.module.css";

interface Props {
  imageUrl?: string;
  fallback: string;
  size?: "sm" | "md" | "lg";
}

const Avatar: FC<Props> = ({ imageUrl, fallback, size }) => {
  const rootClassName = c(s.root, {
    [s.sm]: size === "sm",
    [s.md]: size === "md",
    [s.lg]: size === "lg",
  });

  return (
    <div className={rootClassName}>
      {imageUrl ? (
        <Image
          layout="fill"
          style={{
            objectFit: "cover",
            objectPosition: "50% 50%",
            cursor: "pointer",
          }}
          src={imageUrl || ""}
        />
      ) : (
        <p className="text-sm text-[#FFFFFF]">{fallback}</p>
      )}
    </div>
  );
};

export default Avatar;
