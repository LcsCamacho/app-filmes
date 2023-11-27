
export interface RequestFilmes {
    code: number;
    msg: string;
    page: number;
    pagecount: number;
    limit: string;
    total: number;
    list: Filme[];
}

export interface Filme {
    vod_id: number;
    type_id: number;
    vod_play_url: string;
    vod_name: string;
    vod_pic:string;
    type_name:string;
    vod_content:string;
    vod_class:string;
  }