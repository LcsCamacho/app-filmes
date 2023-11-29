import { NextRequest, NextResponse } from "next/server";
import axios, { AxiosRequestConfig } from "axios";
import { RequestFilmes } from "../../(authenticated)/filmes/types";

export async function GET(req: NextRequest) {
  const params = req.nextUrl.searchParams;
  const ids = params.get("ids");
  const hours = params.get("h");
  const page = params.get("pg");
  const tipo = params.get("t");
  let url = `https://api.cinelisoapi.com/api.php/provide/vod/?ac=videolist`;
  ids && (url += `&ids=${ids}`);
  hours && (url += `&h=${hours}`);
  page && (url += `&pg=${page}`);
  tipo && (url += `&t=${tipo}`);
  const responseGetFilmes = await axios.get<RequestFilmes>(url, {
    cache: "force-cache",
  } as AxiosRequestConfig);
  const filmesWithBackdropPosters = responseGetFilmes.data.list.map(
    async (filme) => {
      const nameEncoded = encodeURI(filme.vod_name);
      const urlBackdrop = `https://api.themoviedb.org/3/search/movie?query=${nameEncoded}`;
      const { data: tmdbData } = await axios.get(urlBackdrop, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjYwYTk5Y2IyMDU0OTBkMjczNzhjOTU0ZWVhZjMxNyIsInN1YiI6IjYzNzhmNmQwYzlkYmY5MDBhYWYzNTU1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.leF-P-yjNzwsZ8WDHuHDz92PZKhVGjfdZp0YpCAiUi4",
        },
        cache: "force-cache",
      } as AxiosRequestConfig);
      if (!tmdbData.results[0] || !tmdbData.results[1])
        return {
          ...filme,
          backdrop_path: "",
          poster_path: "",
          released_date: "",
        };
      const poster_path =
        tmdbData.results.filter(
          (result: { poster_path: string }) => result.poster_path
        )[0].poster_path || "";
      const backdrop_path =
        tmdbData.results.filter(
          (result: { backdrop_path: string }) => result.backdrop_path
        )[0].backdrop_path || "";
      const released_date =
        tmdbData.results.filter(
          (result: { release_date: string }) => result.release_date
        )[0].release_date || "";
      const newFilme = {
        ...filme,
        backdrop_path: "https://image.tmdb.org/t/p/original" + backdrop_path,
        poster_path: "https://image.tmdb.org/t/p/original" + poster_path,
        released_date,
      };

      return newFilme;
    }
  );
  return NextResponse.json({
    ...responseGetFilmes.data,
    list: await Promise.all(filmesWithBackdropPosters),
  });
}
