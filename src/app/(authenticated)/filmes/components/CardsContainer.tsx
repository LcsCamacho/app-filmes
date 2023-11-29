"use client";
import { useDisclosure } from "@nextui-org/react";
import { useState, useEffect } from "react";
import { Filme, RequestFilmes } from "../types";
import CardFilme from "./Card";
import ModalFilme from "./ModalFilme";
import { Pagination } from "@nextui-org/react";
import { FilmesServices } from "../services";
interface Props {
  requestFilmes: RequestFilmes;
}
export default function CardsContainer({ requestFilmes }: Props) {
  const [filmeSelecionado, setFilmeSelecionado] = useState<Filme | undefined>(
    undefined
  );
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [filmes, setFilmes] = useState<Filme[]>(requestFilmes.list);
  const [page, setPage] = useState<number>(requestFilmes.page);

  useEffect(() => {
    (async () => {
      console.log("page", page);
      const requestFilmes = await FilmesServices.getPerPage(page);
      console.log("requestFilmes", requestFilmes);
      setFilmes(requestFilmes.list);
    })();
  }, [page]);

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
      <div className="pagination w-full flex justify-center items-center">
        <Pagination
          isCompact
          showControls
          page={page}
          onChange={setPage}
          total={requestFilmes.pagecount}
          className=""
          color="secondary"
          initialPage={1}
        />
      </div>
    </>
  );
}
