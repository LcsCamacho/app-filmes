"use client";
import { useDisclosure } from "@nextui-org/react";
import { useState } from "react";
import { Filme } from "../types";
import CardFilme from "./Card";
import ModalFilme from "./ModalFilme";

export default function CardsContainer({ filmes }: { filmes: Filme[] }) {
  const [filmeSelecionado, setFilmeSelecionado] = useState<Filme | undefined>(
    undefined
  );
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <ModalFilme
        filme={filmeSelecionado}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        setFilmeSelecionado={(filme) => setFilmeSelecionado(filme)}
      />
      <div className="p-4 cards-filmes-container gap-4 w-full">
        {filmes.map((filme) => {
          return (
            <CardFilme
              key={filme.vod_id}
              handleClickCard={(filme: Filme) => {
                setFilmeSelecionado(filme);
                onOpen();
              }}
              filme={filme}
            />
          );
        })}
      </div>
    </>
  );
}
