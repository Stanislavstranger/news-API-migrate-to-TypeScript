import AppLoader from './appLoader';
import { Callback } from './loader';

class AppController extends AppLoader {
    public getSources(callback: Callback): void {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback,
        );
    }

    public getNews(e: Event, callback: Callback): void {
        let target: HTMLElement | null = e.target as HTMLElement;
        const newsContainer = e.currentTarget as HTMLElement;

        while (target !== null && target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (sourceId !== null && newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback,
                    );
                }
                return;
            }
            target = target.parentNode as HTMLElement | null;
        }
    }
}

export default AppController;
