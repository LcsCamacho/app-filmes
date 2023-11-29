"use client";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";

export default function TabsSeasons({ seasons }: { seasons: any }) {
  return (
    <>
      {Object.keys(seasons).map((season) => {
        console.log(season);
        return (
          <>
            <Tabs aria-label="Options" key={season}>
              <Tab title={season}>
                <Card>
                  <CardBody>{season}</CardBody>
                </Card>
              </Tab>
            </Tabs>
          </>
        );
      })}
    </>
  );
}
