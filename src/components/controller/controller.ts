import { IDrawData } from '../interface/interface';
import AppLoader from './appLoader';
import { Callback } from './loader';

class AppController extends AppLoader {
    private activeElement: HTMLElement | null = null;

    private setActiveElement(element: HTMLElement | null): void {
        if (this.activeElement !== null) {
            this.activeElement.classList.remove('_active');
        }
        if (element !== null) {
            element.classList.add('_active');
            this.activeElement = element;
        }
    }

    public getSources(callback: Callback<IDrawData>): void {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback,
        );
    }

    public getNews(e: Event, callback: Callback<IDrawData>): void {
        let target: HTMLElement | null = e.target as HTMLElement;
        const newsContainer = e.currentTarget as HTMLElement;

        while (target !== null && target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (sourceId !== null && newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    this.setActiveElement(target);
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
