import { Card, CardFooter, Button, CardBody, CardHeader } from "@nextui-org/react";
import HearthSvg from "@/../public/svgs/heartFill.svg"
import Image from "next/image";
import { Filme } from "../types";
export default function CardFilme({ filme }: {
    filme: Filme
}) {

    return (<Card
        isFooterBlurred
        radius="lg"
        className="border-none max-w-[350px] relative w-[350px] h-[550px] hover:scale-105 transition-all"
        isHoverable
        isPressable
    >
        <Image
            alt="Woman listing to music"
            className="object-cover h-full absolute inset-0"
            height={550}
            src={filme.vod_pic}
            width={350}
        />
        <CardHeader>
            <Button className="bg-white min-w-[40px] px-0 text-lg absolute top-4 right-4">
                <Image width={20} height={20} src={HearthSvg} alt="icone de coraçao" />
            </Button>
        </CardHeader>
        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className="text-tiny text-white/80 mr-auto">Disponível.</p>
            <Button className="text-tiny text-white bg-purple" variant="flat" color="default" radius="lg" size="sm">
                Assistir
            </Button>
        </CardFooter>
    </Card>)
}