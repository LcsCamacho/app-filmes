"use client";
import { useRef, useState } from "react";
import ReactPlayer, { Config } from "react-player";
interface PlayerFilmeProps {
  url: string;
  pic: string;
}
export default function PlayerFilme({ url, pic }: PlayerFilmeProps) {
  const [playing, setPlaying] = useState(true);
  const config = useRef<Config>({
    file: {
      attributes: {
        crossOrigin: "true",
        controlsList: "nodownload",
      },
    },
  });

  return (
    <div className="w-full h-full flex-1" suppressHydrationWarning>
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
    </div>
  );
}
