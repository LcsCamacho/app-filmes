"use client";
import Player from "../components/playerFilme";

interface FilmePlayerProps {
  params: {
    id: string;
    slug: string;
  };
  searchParams: {
    id: string;
    pic: string;
  };
}

export default function FilmePlayer({
  params,
  searchParams,
}: FilmePlayerProps) {
  const id = params.slug;
  let query = searchParams.id;
  const pic = searchParams.pic;
  const urlFilme = `https://s2.tmdb.bet/${id}/${query}/index.m3u8`;
  console.log({
    id,
    query,
    pic,
    urlFilme,
  });

  return (
    <div suppressHydrationWarning className="w-full h-[calc(100vh_-_4rem)]">
      <Player url={urlFilme} pic={pic} />
    </div>
  );
}
