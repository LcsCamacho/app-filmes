import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET(req: NextRequest) {
  const params = req.nextUrl.searchParams;
  const ids = params.get("ids");
  const hours = params.get("h");
  const page = params.get("pg");
  let url = `https://api.cinelisoapi.com/api.php/provide/vod/?ac=videolist`;
  ids && (url += `&ids=${ids}`);
  hours && (url += `&h=${hours}`);
  page && (url += `&pg=${page}`);
  const responseGetFilmes = await axios.get(url);
  return NextResponse.json(responseGetFilmes.data);
}
