// Interface ICommon is only added for the Pick example.

interface ICommon {
    readonly sources: string;
    readonly apiKey: string;
    readonly articles: INewsItem[];
}

export type Options = Pick<ICommon, 'sources' | 'apiKey'>;

export interface IDrawData {
    readonly sources: ISourceData[];
    readonly articles: INewsItem[];
}

export interface ISourceData {
    readonly [key: string]: string;
}

export interface INewsItem {
    readonly urlToImage?: string;
    readonly author?: string;
    readonly source?: {
        name: string;
    };
    readonly publishedAt: string;
    readonly title: string;
    readonly description: string;
    readonly url: string;
    readonly content: string;
}
