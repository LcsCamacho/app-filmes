
import CardFilme from "./components/Card";
import HeaderPageFilmes from "./components/Header";
import { FilmesServices } from "./services";

export default async function Filmes() {
    const filmes = await FilmesServices.getWithIds([4, 2])

    return (
        <div className="w-full h-full">
            <HeaderPageFilmes filmeSelecionado={filmes.list[0]} />
            <div className="cards p-2 mt-6 h-full">
                <h2 className="text-white font-semibold text-lg">Trending</h2>
                <div className="container p-4 flex flex-wrap gap-4">
                    {filmes.list.map(filme => {
                        return (
                            <CardFilme key={filme.vod_id} filme={filme} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}