import UseApiPrivate from "@/services/apiPrivate";
import { type } from "os";
import { RequestFilmes, RequestFilme } from "../types";

export const FilmesServices = {
  getAll: async () => {
    const api = UseApiPrivate();
    const response = await api.get<RequestFilmes>("/filmes");
    return response.data;
  },
  getWithIds: async (ids: number[] | string[]) => {
    const idsFormated = ids.join(",");
    const api = UseApiPrivate();
    const response = await api.get<RequestFilmes>(
      `/filmes?ac=videolist&ids=${idsFormated}`
    );
    return response.data;
  },
  getLastHours: async (hour: number | string) => {
    const api = UseApiPrivate();
    const response = await api.get<RequestFilmes>(
      `/filmes?ac=videolist&h=${hour}`
    );
    return response.data;
  },
  getPerPage: async (page: number | string) => {
    const api = UseApiPrivate();
    const response = await api.get<RequestFilmes>(
      `/filmes?ac=videolist&pg=${page}`
    );
    return response.data;
  },
};
