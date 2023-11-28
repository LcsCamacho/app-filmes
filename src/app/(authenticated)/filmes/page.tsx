import CardFilme from "./components/Card";
import CardsContainer from "./components/CardsContainer";
import HeaderPageFilmes from "./components/Header";
import { FilmesServices } from "./services";

export default async function Filmes() {
  const filmes = await FilmesServices.getLastHours(24);

  return (
    <div className="w-full h-full">
      <HeaderPageFilmes filmeSelecionado={filmes.list[0]} />
      <div className="cards p-2 mt-6 h-full">
        <h2 className="text-white font-semibold text-lg">Trending</h2>
        <CardsContainer filmes={filmes.list} />
      </div>
    </div>
  );
}
