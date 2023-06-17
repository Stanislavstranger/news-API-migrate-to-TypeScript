export interface Options {
    source: string;
    apiKey: string;
}

export interface DrawData {
    readonly source: SourceData[];
    readonly articles: NewsItem[];
}

export interface SourceData {
    name: string;
    id: string;
}

export interface NewsItem {
    source: string;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    content: string;
}
