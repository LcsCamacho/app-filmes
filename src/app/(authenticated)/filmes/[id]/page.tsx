import { Col } from "@/components/col";
import { Row } from "@/components/row";
import HeaderPageFilmes from "../components/Header";
import { FilmesServices } from "../services";
import IframeFilme from "./components/playerFilme";

interface FilmeDetailsProps {
  params: {
    id: string;
  };
}
export default async function FilmeDetails({ params }: FilmeDetailsProps) {
  const id = params.id;
  const filme = await FilmesServices.getWithIds([id]);
  const score = Number(filme.list[0].vod_score);
  const urls = filme.list[0].vod_play_url.split("#");
  console.log(urls);

  return (
    <div className="flex flex-col gap-4 w-full custom-container">
      <HeaderPageFilmes filmeSelecionado={filme.list[0]} showWatchNow={false} />
      <div className="desc w-full flex flex-col gap-6  p-4">
        <h3 className="text-4xl font-semibold mt-4">Detalhes do filme</h3>
        <Row className="">
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

      <div className="content w-full">
        <div className="episodios w-full cards-container">
          {urls.map((url, index) => {
            url = url.split("$")[1];
            return (
              <div
                key={index}
                suppressHydrationWarning
                className="episodio flex flex-col gap-2 p-4 relative shadow-md card h-[500px]"
              >
                <p className="text-2xl font-semibold text-white z-10">
                  Episódio {index + 1}
                </p>
                <IframeFilme url={url} pic={filme.list[0].vod_pic} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
