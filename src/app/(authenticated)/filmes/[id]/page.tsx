import { Col } from "@/components/col";
import { Row } from "@/components/row";
import HeaderPageFilmes from "../components/Header";
import { FilmesServices } from "../services";
import Player from "./components/playerFilme";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import TabsSeasons from "./components/tabsSeasons";

interface FilmeDetailsProps {
  params: {
    id: string;
  };
}
const seasons2: {
  [key: string]: { url: string }[];
} = {};

export type Seasons = typeof seasons2;

export default async function FilmeDetails({ params }: FilmeDetailsProps) {
  const id = params.id;
  const filme = await FilmesServices.getWithIds([id]);
  const score = Number(filme.list[0].vod_score);
  const urlsUnformated = filme.list[0].vod_play_url.split("#");
  const seasons: {
    [key: string]: { url: string }[];
  } = {};

  for (const episode of urlsUnformated) {
    const [seasonEpisode, url] = episode.split("$");
    const [season] = seasonEpisode.split(" ");

    // Cria a temporada se ainda não existir
    if (!seasons[season]) {
      seasons[season] = [];
    }

    // Adiciona o episódio à temporada
    seasons[season].push({ url });
  }

  return (
    <div className="flex flex-col gap-4 w-full">
      <HeaderPageFilmes filmeSelecionado={filme.list[0]} showWatchNow={false} />
      <div className="desc w-full flex flex-col gap-6 custom-container">
        <h3 className="text-4xl font-semibold mt-4">Detalhes do filme</h3>
        <Row className="items-start justify-start">
          <Col>
            {filme.list[0].vod_writer && (
              <Row gap={2} className="justify-start w-full">
                <p className="text-gray-500">Direção:</p>
                <p>{filme.list[0].vod_writer}</p>
              </Row>
            )}
            <Row gap={2} className="justify-start w-full">
              <p className="text-gray-500">Elenco:</p>
              <p className="">
                {filme.list[0].vod_actor.replaceAll(",", ", ")}
              </p>
            </Row>
            <Row gap={2} className="justify-start w-full">
              <p className="text-gray-500 ">Generos:</p>
              <p className="">{filme.list[0].vod_tag}</p>
            </Row>
            <Row gap={2} className="justify-start w-full">
              <p className="text-gray-500">Nota:</p>
              <p
                className={`${
                  score <= 4
                    ? "bg-red-500"
                    : score <= 7
                    ? "bg-warning-300 light:bg-warning-600"
                    : "bg-green-500"
                } w-fit rounded p-2 h-8 flex items-center justify-center`}
              >
                {score}
              </p>
            </Row>
          </Col>
          <Col>
            <Row>
              <p className="text-gray-500">Sinopse:</p>
              <p className="max-w-[800px]">{filme.list[0].vod_content}</p>
            </Row>
          </Col>
        </Row>
      </div>

      <div className="content w-full p-4 custom-container">
        <div className="tabs-container w-full flex gap-4 flex-col">
          <TabsSeasons id={id} seasons={seasons} pic={filme.list[0].vod_pic} />
        </div>
        <div className="episodios w-full cards-container"></div>
      </div>
    </div>
  );
}
