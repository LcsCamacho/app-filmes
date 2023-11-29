"use client";
import HearthSvg from "/public/svgs/heart.svg";
import HearthFillSvg from "/public/svgs/heartFill.svg";
import { Button } from "@nextui-org/react";
import Image from "next/image";

export const HeartBtn = ({
  onClick,
  className,
  width,
  height,
  liked,
}: {
  onClick?: () => void;
  className?: string;
  width?: number;
  height?: number;
  liked?: boolean;
}) => {
  return (
    <Button
      className={`bg-white min-w-[40px] button-heart p-0 hearth-button ${className}`}
      onClick={onClick}
    >
      <Image
        width={width || 20}
        height={height || 20}
        src={liked ? HearthFillSvg : HearthSvg}
        alt="icone de coraçao"
      />
    </Button>
  );
};
