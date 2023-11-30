import CardsContainer from "./components/CardsContainer";
import HeaderPageFilmes from "./components/Header";
import { FilmesServices } from "./services";

export default async function Filmes({
  searchParams,
}: {
  searchParams: {
    name: string;
  };
}) {
  const requestFilmes = searchParams.name
    ? await FilmesServices.getByName(searchParams.name)
    : await FilmesServices.getPerPage(1);

  return (
    <div className="w-full h-full">
      <HeaderPageFilmes filmeSelecionado={requestFilmes.list[5]} />
      <div className="cards p-2 mt-6 h-full">
        <h2 className="text-white font-semibold text-lg">Em alta</h2>
        <CardsContainer requestFilmes={requestFilmes} />
      </div>
    </div>
  );
}
