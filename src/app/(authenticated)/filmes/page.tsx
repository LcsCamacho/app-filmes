import CardsContainer from "./components/CardsContainer";
import HeaderPageFilmes from "./components/Header";
import { FilmesServices } from "./services";

export default async function Filmes() {
  const requestFilmes = await FilmesServices.getAll();

  return (
    <div className="w-full h-full">
      <HeaderPageFilmes filmeSelecionado={requestFilmes.list[5]} />
      <div className="cards p-2 mt-6 h-full">
        <h2 className="text-white font-semibold text-lg">Trending</h2>
        <CardsContainer requestFilmes={requestFilmes} />
      </div>
    </div>
  );
}
