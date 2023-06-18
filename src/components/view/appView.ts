import { NewsItem, SourceData } from '../interface/interface';
import News from './news/news';
import Sources from './sources/sources';

export class AppView {
    private news: News;

    private sources: Sources;

    protected constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    protected drawNews(data: { articles?: NewsItem[] }): void {
        const values = data?.articles || [];
        this.news.draw(values);
    }

    protected drawSources(data: { sources?: SourceData[] }): void {
        const values = data?.sources || [];
        this.sources.draw(values);
    }
}

export default AppView;
