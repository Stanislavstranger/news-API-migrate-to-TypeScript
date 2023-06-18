export interface Options {
    readonly sources: string;
    readonly apiKey: string;
}

export interface DrawData {
    readonly source: SourceData[];
    readonly articles: NewsItem[];
}

export interface SourceData {
    readonly [key: string]: string;
}

export interface NewsItem {
    readonly urlToImage?: string;
    readonly author?: string;
    readonly source?: {
        name: string;
    };
    readonly publishedAt: string;
    readonly title: string;
    readonly description: string;
    readonly url: string;
}
