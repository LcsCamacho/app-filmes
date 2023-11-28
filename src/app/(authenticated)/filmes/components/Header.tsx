import Image from "next/image";
import bg from "@/../public/images/bg-filmes.jpg";
import { Button } from "@nextui-org/button";
import { Filme } from "../types";
import Link from "next/link";
import { HeartBtn } from "../../../../components/heart-button";

export default function HeaderPageFilmes({
  filmeSelecionado,
  showWatchNow = true,
}: {
  filmeSelecionado: Filme;
  showWatchNow?: boolean;
}) {
  return (
    <div className="w-full h-96 relative flex flex-col p-8 bg-neutral-900 bg-banner-filme">
      <Image
        src={filmeSelecionado.vod_pic || bg}
        width={1920}
        height={1080}
        alt="background filmes "
        className="absolute inset-0 w-full h-full object-cover object-center "
      />

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
              <Button className="bg-purple text-white">Watch now</Button>
            </Link>
          )}
          <HeartBtn />
        </div>
      </div>
    </div>
  );
}
