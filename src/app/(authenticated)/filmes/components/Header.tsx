"use client";
import Image from "next/image";
import bg from "@/../public/images/bg-filmes.jpg";
import HearthSvg from "@/../public/svgs/heart.svg";
import { Button } from "@nextui-org/button";
import { Filme } from "../types";
import { useState } from "react";
import Link from "next/link";

export default function HeaderPageFilmes({
  filmeSelecionado,
  showWatchNow = true,
}: {
  filmeSelecionado: Filme;
  showWatchNow?: boolean;
}) {
  const [showSinopse, setShowSinopse] = useState(false);
  return (
    <div
      className="w-full h-96 relative flex flex-col p-8 bg-neutral-900 bg-banner-filme"
      onMouseEnter={() => setShowSinopse(true)}
      onMouseLeave={() => setShowSinopse(false)}
    >
      <Image
        src={filmeSelecionado.vod_pic || bg}
        width={1920}
        height={1080}
        alt="background filmes "
        className="absolute inset-0 w-full h-full object-cover object-center "
      />
      {showSinopse && showWatchNow && (
        <div className="desc animate-appearance-in absolute bottom-4 right-3 max-w-3xl p-4 rounded">
          <p className="text-white">{filmeSelecionado.vod_content}</p>
        </div>
      )}
      <div className="mt-auto z-10 flex flex-col gap-3">
        <p className="text-white font-semibold text-5xl mb-4">
          {filmeSelecionado.vod_name}
        </p>
        <p className="text-white">
          {new Date(filmeSelecionado.vod_time_add).toLocaleDateString()} |{" "}
          {filmeSelecionado.type_name} | 1 Season
        </p>
        <div className="mt-4 flex items-center  gap-3">
          {showWatchNow && (
            <Link href={`/filmes/${filmeSelecionado.vod_id}`}>
              <Button className="bg-purple">Watch now</Button>
            </Link>
          )}
          <Button className="bg-white w-60px p-0">
            <Image src={HearthSvg} alt="icone de coraçao" />
          </Button>
        </div>
      </div>
    </div>
  );
}
