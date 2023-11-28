import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Link,
} from "@nextui-org/react";
import { Filme } from "../types";
import Image from "next/image";
import { Row } from "../../../../components/row";
import HearthSvg from "/public/svgs/heartFill.svg";
import { HeartBtn } from "../../../../components/heart-button";
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
        className="w-screen max-w-[100vw] pb-4 h-3/6 dark:bg-neutral-900 light:bg-slate-100 z-50 modal-filme"
        disableAnimation
        placement="bottom"
      >
        <ModalContent>
          {(onClose) => {
            return (
              <>
                <ModalBody>
                  <div className="modal-body-filme flex items-center gap-10 justify-center">
                    <div className="image w-max h-[450px]">
                      <Image
                        width={500}
                        height={250}
                        src={filme?.vod_pic}
                        alt="imagem do filme"
                        className="rounded-xl w-full h-[450px] object-contain max-h-[450px]"
                      />
                    </div>
                    <div className="content w-1/2 h-full flex flex-col justify-start items-start gap-4 py-4">
                      <Row className="justify-center items-center w-full pr-3">
                        <h1 className="text-5xl">{filme?.vod_name}</h1>{" "}
                        <Row className="ml-auto" gap={2}>
                          <p className="text-gray-500">
                            <Image
                              src={StarSvg}
                              alt="heart"
                              width={20}
                              height={20}
                            />
                          </p>
                          <p className={""}>{score}/10</p>
                        </Row>
                      </Row>
                      <Row>
                        <p className="text-white">
                          {filme?.type_name} | 2h 38m
                        </p>
                      </Row>
                      <p>{filme?.vod_content}</p>
                      <Row>
                        <Button className="bg-purple text-white">
                          <Link
                            className="text-white"
                            href={"/filmes/" + filme.vod_id}
                          >
                            Assistir agora
                          </Link>
                        </Button>
                        <HeartBtn />
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
