
import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET(req: NextRequest) {
    const params = req.nextUrl.searchParams
    const ids = params.get("ids")
    const responseGetFilmes = await axios.get("https://api.cinelisoapi.com/api.php/provide/vod/?ac=videolist&h=24")
    return NextResponse.json(responseGetFilmes.data)
};
