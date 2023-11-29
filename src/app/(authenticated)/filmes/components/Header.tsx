import Image from "next/image";
import bg from "@/../public/images/bg-filmes.jpg";
import { Button } from "@nextui-org/button";
import { Filme } from "../types";
import Link from "next/link";
import { HeartBtn } from "../../../../components/heart-button";

export default function HeaderPageFilmes({
  filmeSelecionado: filme,
  showWatchNow = true,
}: {
  filmeSelecionado: Filme;
  showWatchNow?: boolean;
}) {
  const qtdSeasons = filme.vod_play_url.includes("S04")
    ? 4
    : filme.vod_play_url.includes("S03")
    ? 3
    : filme.vod_play_url.includes("S02")
    ? 2
    : filme.vod_play_url.includes("S01")
    ? 1
    : undefined;
  const score = Number(filme.vod_score);

  return (
    <div className="max-w-screen w-full h-[500px] relative flex flex-col bg-neutral-900 bg-banner-filme">
      <Image
        src={filme.backdrop_path || filme.poster_path || filme.vod_pic || bg}
        width={1920}
        height={1080}
        alt="background filmes "
        className="absolute inset-0 w-full h-full object-cover object-center "
      />

      <div className="mt-auto p-4 z-10 flex flex-col gap-3 custom-container w-full">
        <p className="text-white font-semibold text-5xl mb-4">
          {filme.vod_name}
        </p>
        <p className="text-white">
          {filme.released_date || 2022} | {filme.type_name} |{" "}
          {qtdSeasons
            ? qtdSeasons + ` Temporada${qtdSeasons > 1 ? "s" : ""}`
            : ""}
        </p>
        <div className="mt-4 flex items-center gap-3">
          {showWatchNow && (
            <Link href={`/filmes/${filme.vod_id}`}>
              <Button className="bg-purple text-white">Watch now</Button>
            </Link>
          )}
          <HeartBtn liked={score > 7} />
        </div>
      </div>
    </div>
  );
}
