import { Button } from "@nextui-org/button";
import { Link, Modal, ModalBody, ModalContent } from "@nextui-org/react";
import Image from "next/image";
import { HeartBtn } from "../../../../components/heart-button";
import { Row } from "../../../../components/row";
import { Filme } from "../types";
import StarSvg from "/public/svgs/star.svg";

interface ModalFilmeProps {
  filme: Filme | undefined;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  setFilmeSelecionado: (filme: Filme | undefined) => void;
}

export default function ModalFilme({
  filme,
  isOpen,
  onOpenChange,
  setFilmeSelecionado,
}: ModalFilmeProps) {
  if (!filme) return <></>;
  const score = Number(filme.vod_score);
  const qtdSeasons = filme.vod_play_url.includes("S04")
    ? 4
    : filme.vod_play_url.includes("S03")
    ? 3
    : filme.vod_play_url.includes("S02")
    ? 2
    : filme.vod_play_url.includes("S01")
    ? 1
    : undefined;
  return (
    <>
      <Modal
        shadow="lg"
        portalContainer={document.querySelector("body")!}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onClose={() => {
          setFilmeSelecionado(undefined);
        }}
        classNames={{
          backdrop:
            "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
        }}
        className="w-screen max-w-[100vw] overflow-auto h-5/6 md:h-3/6  dark:bg-neutral-900 light:bg-slate-100 z-50 modal-filme"
        disableAnimation
        placement="bottom"
      >
        <ModalContent>
          {(onClose) => {
            return (
              <>
                <ModalBody>
                  <div className="modal-body-filme h-full flex items-center md:gap-10 justify-center flex-col md:flex-row gap-4">
                    <div className="image w-max h-full max-[1000px]:flex max-[1000px]:items-center max-[1000px]:justify-center">
                      <Image
                        width={500}
                        height={250}
                        src={filme?.vod_pic}
                        alt="imagem do filme"
                        className="rounded-xl image-modal-filme w-full h-full object-contain max-h-[450px]"
                      />
                    </div>
                    <div className="content w-fit items-start md:justify-center lg:justify-start md:w-1/2 h-full flex flex-col gap-4 py-2">
                      <Row className="items-center">
                        <h1 className="text-5xl max-[600px]:text-4xl">
                          {filme?.vod_name}
                        </h1>{" "}
                        <Row className="ml-auto max-[1000px]:m-0" gap={2}>
                          <Image
                            src={StarSvg}
                            alt="heart"
                            width={20}
                            height={20}
                          />
                          <p className={""}>{score}/10</p>
                        </Row>
                      </Row>
                      <Row>
                        <p className="text-white">
                          {filme?.type_name} |{" "}
                          {qtdSeasons
                            ? qtdSeasons +
                              ` Temporada${qtdSeasons > 1 ? "s" : ""}`
                            : ""}
                        </p>
                      </Row>
                      <p className="max-w-full max-[768px]:max-w-[300px]">
                        {filme?.vod_content}
                      </p>
                      <Row className="items-center">
                        <Button className="bg-purple text-white ">
                          <Link
                            className="text-white"
                            href={"/filmes/" + filme.vod_id}
                          >
                            Assistir agora
                          </Link>
                        </Button>
                        <HeartBtn liked={score > 7} />
                      </Row>
                    </div>
                  </div>
                </ModalBody>
              </>
            );
          }}
        </ModalContent>
      </Modal>
    </>
  );
}
