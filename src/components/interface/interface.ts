export interface Options {
    sources: string;
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
    urlToImage?: string;
    author?: string;
    source?: {
        name: string;
    };
    publishedAt: string;
    title: string;
    description: string;
    url: string;
}
