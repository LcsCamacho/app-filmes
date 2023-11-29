"use client";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { Row } from "@/components/row";
import { Seasons } from "../page";
import PlaySvg from "@/../public/svgs/play.svg";
import { IconModel } from "@/components/icon-model";
import Link from "next/link";

export default function TabsSeasons({
  seasons,
  id,
  pic,
}: {
  seasons: Seasons;
  id: string;
  pic: string;
}) {
  return (
    <Tabs aria-label="Options">
      {Object.keys(seasons).map((season) => {
        return (
          <Tab
            onClick={() => {
              const tamanhoTela = document.querySelector("body")?.clientHeight;
              console.log(tamanhoTela);
              window.scrollTo(0, tamanhoTela || 400);
            }}
            key={season}
            title={season}
            className="flex gap-4 columns-tabs"
          >
            <div className="w-full cards-episodes">
              {seasons[season].map((episode, index) => {
                const seasonId = episode.url.split("/")[3];
                const epId = episode.url.split("/")[4];
                return (
                  <Card key={episode.url} className="w-full">
                    <CardBody>
                      <Row
                        gap={2}
                        className="items-center flex-nowrap justify-center"
                      >
                        <h3>Ep: {index + 1}</h3>
                        <Link
                          href={`/filmes/${id}/${seasonId}?id=${epId}&pic=${pic}`}
                        >
                          <IconModel image={PlaySvg} height={30} width={40} />
                        </Link>
                      </Row>
                    </CardBody>
                  </Card>
                );
              })}
            </div>
          </Tab>
        );
      })}
    </Tabs>
  );
}
