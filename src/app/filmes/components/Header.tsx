import Image from "next/image";
import bg from "@/../public/images/bg-filmes.jpg"
import HearthSvg from "@/../public/svgs/heart.svg"
import { Button } from "@nextui-org/button";
import { Filme } from "../types";

export default function HeaderPageFilmes({filmeSelecionado}: {
    filmeSelecionado: Filme
}) {

    return (
        <div className="w-full h-96 relative flex flex-col p-8">
            <Image src={bg} alt="background filmes" className="absolute inset-0 w-full h-full" />
            <div className="mt-auto z-10 flex flex-col gap-3">
                <p className="text-white font-semibold text-5xl mb-4">{filmeSelecionado.vod_name}</p>
                <p className="text-white">2022 | {filmeSelecionado.type_name} | 1 Season</p>
                <div className="mt-4 flex items-center  gap-3">
                    <Button className="bg-purple">
                        Watch now
                    </Button>
                    <Button className="bg-white w-60px p-0">
                        <Image src={HearthSvg} alt="icone de coraçao" />
                    </Button>
                </div>
            </div>
        </div>
    )
}