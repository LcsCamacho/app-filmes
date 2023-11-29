import { Col } from "@/components/col";
import { Row } from "@/components/row";
import ReactPlayer from "react-player";
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
  const query = searchParams.id;
  const pic = searchParams.pic;
  const urlFilme = `https://s2.tmdb.bet/${id}/${query}/index.m3u8`;

  return (
    <div suppressHydrationWarning className="w-full h-[calc(100vh_-_4rem)]">
      <Player url={urlFilme} pic={pic} />
    </div>
  );
}
