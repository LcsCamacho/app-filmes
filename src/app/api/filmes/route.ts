import { NextRequest, NextResponse } from "next/server";
import axios, { AxiosRequestConfig } from "axios";
import { RequestFilmes } from "../../(authenticated)/filmes/types";

interface TmdbResults {
  adult: false;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface TmdbResponse {
  page: 1;
  results: TmdbResults[];
  total_pages: 1;
  total_results: 1;
}

export async function GET(req: NextRequest) {
  const params = req.nextUrl.searchParams;
  const ids = params.get("ids");
  const hours = params.get("h");
  const page = params.get("pg");
  const tipo = params.get("t");
  const name = params.get("wd");
  let url = `https://api.cinelisoapi.com/api.php/provide/vod/?ac=videolist`;
  ids && (url += `&ids=${ids}`);
  hours && (url += `&h=${hours}`);
  page && (url += `&pg=${page}`);
  tipo && (url += `&t=${tipo}`);
  name && (url += `&wd=${name}`);
  const responseGetFilmes = await axios.get<RequestFilmes>(url, {
    cache: "force-cache",
  } as AxiosRequestConfig);
  // const filmesWithBackdropPosters = responseGetFilmes.data.list.map(
  //   async (filme, index) => {
  //     const nameEncoded = encodeURI(filme.vod_name);
  //     console.log(nameEncoded);
  //     const urlBackdrop = `https://api.themoviedb.org/3/search/movie?query=${nameEncoded}`;
  //     const responseTmdb = await axios.get<TmdbResponse>(urlBackdrop, {
  //       headers: {
  //         Authorization:
  //           "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjYwYTk5Y2IyMDU0OTBkMjczNzhjOTU0ZWVhZjMxNyIsInN1YiI6IjYzNzhmNmQwYzlkYmY5MDBhYWYzNTU1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.leF-P-yjNzwsZ8WDHuHDz92PZKhVGjfdZp0YpCAiUi4",
  //       },
  //       cache: "force-cache",
  //     } as AxiosRequestConfig);
  //     const tmdbData = responseTmdb.data;
  //     if (tmdbData.results.length === 0)
  //       return {
  //         ...filme,
  //         backdrop_path: "",
  //         poster_path: "",
  //         released_date: "",
  //       };
  //     const resultWithImagesAndDate = tmdbData.results.filter((r) => {
  //       return r.backdrop_path && r.poster_path && r.release_date;
  //     })[0];
  //     const { backdrop_path, poster_path, release_date } =
  //       resultWithImagesAndDate;
  //     console.log(resultWithImagesAndDate, index);

  //     // return {
  //     //   ...filme,
  //     //   backdrop_path: "https://image.tmdb.org/t/p/original" + " backdrop_path",
  //     //   poster_path: "https://image.tmdb.org/t/p/original" + "poster_path",
  //     //   release_date: "release_date",
  //     // };

  //     const newFilme = {
  //       ...filme,
  //       backdrop_path: "https://image.tmdb.org/t/p/original" + backdrop_path,
  //       poster_path: "https://image.tmdb.org/t/p/original" + poster_path,
  //       release_date,
  //     };

  //     return newFilme;
  //   }
  // );
  return NextResponse.json({
    ...responseGetFilmes.data,
  });
}
