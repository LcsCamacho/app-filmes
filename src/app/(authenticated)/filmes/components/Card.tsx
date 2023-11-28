"use client";
import HearthSvg from "@/../public/svgs/heartFill.svg";
import { Button, Card, CardFooter, CardHeader } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { HeartBtn } from "../../../../components/heart-button";
import { Filme } from "../types";

export default function CardFilme({
  filme,
  handleClickCard,
}: {
  filme: Filme;
  handleClickCard: (filme: Filme) => void;
}) {
  return (
    <Card
      isFooterBlurred
      radius="lg"
      className="card border-none max-w-[350px] relative w-[350px] h-[550px] hover:scale-125 z-20 hover:z-30 cursor-pointer"
      isHoverable
    >
      <Image
        alt="Woman listing to music"
        className="object-cover h-full absolute -z-10 inset-0"
        height={550}
        src={filme.vod_pic}
        width={350}
        onClick={() => {
          console.log("clicou");
          handleClickCard(filme);
        }}
      />
      <CardHeader>
        <HeartBtn
          className="bg-white min-w-[40px] px-0 text-lg absolute top-4 right-4"
          liked={true}
        />
      </CardHeader>
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80 mr-auto">Disponível.</p>
        <Button
          className="text-tiny text-white bg-purple"
          variant="flat"
          color="default"
          radius="lg"
          size="sm"
        >
          <Link href={`/filmes/${filme.vod_id}`}>Assistir</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
