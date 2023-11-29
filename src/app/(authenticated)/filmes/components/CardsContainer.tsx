"use client";
import { Card, useDisclosure } from "@nextui-org/react";
import { useState, useEffect } from "react";
import { Filme, RequestFilmes } from "../types";
import CardFilme from "./Card";
import ModalFilme from "./ModalFilme";
import { Pagination } from "@nextui-org/react";
import { FilmesServices } from "../services";
import UseApiPrivate from "../../../../services/apiPrivate";
interface Props {
  requestFilmes: RequestFilmes;
}
const arrayMock = Array.from(Array(10).keys());
export default function CardsContainer({ requestFilmes }: Props) {
  const [filmeSelecionado, setFilmeSelecionado] = useState<Filme | undefined>(
    undefined
  );
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [filmes, setFilmes] = useState<Filme[]>(requestFilmes.list);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasInitialData, setHasInitialData] = useState<boolean>(false);

  const api = UseApiPrivate();

  useEffect(() => {
    if (!hasInitialData) return;
    console.log("page", page);
    (async () => {
      setLoading(true);
      const { data } = await api.get(`/filmes?pg=${page}&ac=videolist`);
      console.log(data);
      setFilmes(data.list);
      setLoading(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        {loading &&
          arrayMock.map((_, index) => {
            return (
              <Card
                key={index}
                className="card-filme border-none max-w-[350px] h-full relative lg:hover:scale-125 hover:scale-105 z-20 hover:z-30 cursor-pointer rounded animate-pulse bg-gray-200"
              >
                <h1 className="text-white text-3xl"></h1>
              </Card>
            );
          })}
        {!loading &&
          filmes.map((filme) => {
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
          onChange={(page) => {
            setPage(page);
            setHasInitialData(true);
          }}
          total={requestFilmes.pagecount}
          className=""
          color="secondary"
          initialPage={1}
        />
      </div>
    </>
  );
}
