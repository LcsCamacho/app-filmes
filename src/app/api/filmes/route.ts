import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET(req: NextRequest) {
  const params = req.nextUrl.searchParams;
  const ids = params.get("ids");
  const hours = params.get("h");
  if (ids) {
    const responseGetFilme = await axios.get(
      `https://api.cinelisoapi.com/api.php/provide/vod/?ac=videolist&ids=${ids}`
    );
    return NextResponse.json(responseGetFilme.data);
  }
  if (hours) {
    const responseGetFilmes = await axios.get(
      `https://api.cinelisoapi.com/api.php/provide/vod/?ac=videolist&h=${hours}`
    );
    return NextResponse.json(responseGetFilmes.data);
  }
  const responseGetFilmes = await axios.get(
    "https://api.cinelisoapi.com/api.php/provide/vod/?ac=videolist"
  );
  return NextResponse.json(responseGetFilmes.data);
}
