import UseApiPrivate from "@/services/apiPrivate"
import { RequestFilmes } from "../types"

export const FilmesServices = {
    getAll: async () => {
        const api = UseApiPrivate()
        const response = await api.get("/filmes")
        return response.data
    },
    getWithIds: async (ids:number[]) => {
        const idsFormated = ids.join(",")
        const api = UseApiPrivate()
        const response = await api.get<RequestFilmes>("/filmes?ids="+idsFormated)
        return response.data
    }
}