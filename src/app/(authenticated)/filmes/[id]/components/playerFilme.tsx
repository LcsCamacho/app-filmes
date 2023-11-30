"use client";
import { useRef, useState } from "react";
import ReactPlayer, { Config } from "react-player";
interface PlayerFilmeProps {
  url: string;
  pic: string;
  iframe?: boolean;
}
export default function PlayerFilme({ url, pic, iframe }: PlayerFilmeProps) {
  const [playing, setPlaying] = useState(true);
  const config = useRef<Config>({
    file: {
      attributes: {
        crossOrigin: "true",
        controlsList: "nodownload",
      },
    },
  });
  console.log(url);
  return (
    <div className="w-full h-full flex-1" suppressHydrationWarning>
      {!iframe && (
        <ReactPlayer
          url={url}
          controls={true}
          playing={playing}
          stopOnUnmount
          light={pic}
          width="100%"
          height="100%"
          config={config.current}
        />
      )}
      {iframe && (
        <iframe
          src={"https://cineliso.com/player/?url=" + url}
          title="video"
          width="100%"
          height="100%"
          allowFullScreen
        />
      )}
    </div>
  );
}
