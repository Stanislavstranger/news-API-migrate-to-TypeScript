import { INewsItem, ISourceData } from '../interface/interface';
import News from './news/news';
import Sources from './sources/sources';

export class AppView {
    private news: News;

    private sources: Sources;

    public constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    public drawNews(data: { articles?: INewsItem[] }): void {
        const values = data?.articles || [];
        this.news.draw(values);
    }

    public drawSources(data: { sources?: ISourceData[] }): void {
        const values = data?.sources || [];
        this.sources.draw(values);
    }
}

export default AppView;
