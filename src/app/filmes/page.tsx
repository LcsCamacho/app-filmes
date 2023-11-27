import CardFilme from "./components/Card";
import HeaderPageFilmes from "./components/Header";
import { FilmesServices } from "./services";
import { Filme } from "./types";

export default async function Filmes() {
  const filme1: Filme = {
    vod_id: 1,
    vod_name: "Filme 1",
    type_id: 1,
    type_name: "Filme",
    vod_class: "18",
    vod_content: "Conteudo",
    vod_pic: "https://image.tmdb.org/t/p/w500/6KErczPBROQty7QoIsaa6wJYXZi.jpg",
    vod_play_url: "https://www.youtube.com/watch?v=6KErczPBROQty7QoIsaa6wJYXZi",
  };

  const filmes = {
    list: [filme1],
  };

  return (
    <div className="w-full h-full">
      <HeaderPageFilmes filmeSelecionado={filmes.list[0]} />
      <div className="cards p-2 mt-6 h-full">
        <h2 className="text-white font-semibold text-lg">Trending</h2>
        <div className="container p-4 flex flex-wrap gap-4">
          {filmes.list.map((filme) => {
            return <CardFilme key={filme.vod_id} filme={filme} />;
          })}
        </div>
      </div>
    </div>
  );
}
