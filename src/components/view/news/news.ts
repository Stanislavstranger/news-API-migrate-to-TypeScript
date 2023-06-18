import './news.css';
import { NewsItem } from '../../interface/interface';

class News {
    public draw(data: NewsItem[]): void {
        const news = this.filterNews(data);

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector<HTMLTemplateElement>('#newsItemTemp');

        news.forEach((item, idx) => {
            const newsClone = this.cloneNewsItemTemplate(newsItemTemp, item, idx);
            fragment.append(newsClone);
        });

        this.clearNewsContainer();
        this.appendFragmentToNewsContainer(fragment);
    }

    private filterNews(data: NewsItem[]): NewsItem[] {
        return data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;
    }

    private cloneNewsItemTemplate(template: HTMLTemplateElement | null, item: NewsItem, idx: number): DocumentFragment {
        const fragment = document.createDocumentFragment();

        if (template) {
            const newsClone = template.content.cloneNode(true) as HTMLElement;

            if (idx % 2) {
                const newsItem = newsClone.querySelector('.news__item');
                if (newsItem) {
                    newsItem.classList.add('alt');
                }
            }

            this.setNewsItemData(newsClone, item);
            fragment.appendChild(newsClone);
        }

        return fragment;
    }

    private setNewsItemData(clone: HTMLElement, item: NewsItem): void {
        const metaPhoto = clone.querySelector('.news__meta-photo') as HTMLElement;
        metaPhoto.style.backgroundImage = `url(${item.urlToImage})`;

        const metaAuthor = clone.querySelector('.news__meta-author');
        if (metaAuthor) {
            metaAuthor.textContent = item.author || item.source?.name || '';
        }

        const metaDate = clone.querySelector('.news__meta-date');
        if (metaDate) {
            metaDate.textContent = item.publishedAt ? this.formatDate(item.publishedAt) : '';
        }

        const descriptionTitle = clone.querySelector('.news__description-title');
        if (descriptionTitle) {
            descriptionTitle.textContent = item.title || '';
        }

        const descriptionSource = clone.querySelector('.news__description-source');
        if (descriptionSource) {
            descriptionSource.textContent = item.source?.name || '';
        }

        const descriptionContent = clone.querySelector('.news__description-content');
        if (descriptionContent) {
            descriptionContent.textContent = item.description || '';
        }

        const readMoreLink = clone.querySelector('.news__read-more a');
        if (readMoreLink) {
            readMoreLink.setAttribute('href', item.url || '');
        }
    }

    private formatDate(date: string): string {
        return date.slice(0, 10).split('-').reverse().join('-');
    }

    private clearNewsContainer(): void {
        const newsContainer = document.querySelector('.news');
        if (newsContainer) {
            newsContainer.innerHTML = '';
        }
    }

    private appendFragmentToNewsContainer(fragment: DocumentFragment): void {
        const newsContainer = document.querySelector('.news');
        if (newsContainer) {
            newsContainer.appendChild(fragment);
        }
    }
}

export default News;
