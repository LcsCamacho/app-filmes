import { Row } from '../../../../components/row';
import HeaderPageFilmes from "../components/Header";
import { FilmesServices } from "../services";

interface FilmeDetailsProps {
  params: {
    id: string;
  };
}
export default async function FilmeDetails({ params }: FilmeDetailsProps) {
  const id = params.id;
  const filme = await FilmesServices.getWithIds([id]);
  const score = Number(filme.list[0].vod_score);
  const urls = filme.list[0].vod_play_url;
  const url = urls.split("#")[0].split("$")[1];
  console.log(url);
  return (
    <div className="flex flex-col gap-4 w-full">
      <HeaderPageFilmes filmeSelecionado={filme.list[0]} showWatchNow={false} />
      <div className="desc p-4 w-full flex flex-col gap-6">
        <h3 className="text-4xl font-semibold mt-4">Detalhes do filme</h3>
        <p>{filme.list[0].vod_content}</p>

        {filme.list[0].vod_writer && (
          <Row>
            <p className="text-gray-500">Direção:</p>
            <p className="leading-5">{filme.list[0].vod_writer}</p>
          </Row>
        )}
        <Row>
          <p className="text-gray-500">Elenco:</p>
          <p className="">{filme.list[0].vod_actor}</p>
        </Row>
        <Row>
          <p className="text-gray-500 ">Generos:</p>
          <p className="">{filme.list[0].vod_tag}</p>
        </Row>
        <Row>
          <p className="text-gray-500">Nota:</p>
          <p
            className={`${score <= 4
              ? "bg-red-500"
              : score <= 7
                ? "bg-warning-300 light:bg-warning-600"
                : "bg-green-500"
              } w-fit rounded p-2 `}
          >
            {score}
          </p>
        </Row>
      </div>

      <div className="content w-full p-4">
        <h3 className="text-4xl font-semibold mt-4">Assista-me</h3>
        <iframe
          width="100%"
          height="500"
          src={`https://cineliso.com/player/?url=${url}`}
          title="Cineliso Player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        ></iframe>
      </div>
    </div>
  );
}
