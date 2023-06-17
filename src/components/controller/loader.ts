import { Options, DrawData } from '../interface/interface';

enum HTTPMethod {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    PATCH = 'PATCH',
    DELETE = 'DELETE',
}

export type CallbackType = (data: DrawData) => void;

abstract class Loader {
    protected readonly baseLink: string | undefined;

    protected readonly options: Partial<Options>;

    protected constructor(baseLink: string | undefined, options: Partial<Options>) {
        this.baseLink = baseLink;
        this.options = options;
    }

    protected getResp(
        { endpoint, options = {} }: { endpoint: string; options?: Partial<Options> },
        callback: CallbackType = (): void => {
            console.error('No callback for GET response');
        },
    ): void {
        this.load(HTTPMethod.GET, endpoint, callback, options);
    }

    protected errorHandler(res: Response): Response {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    protected makeUrl(options: Partial<Options>, endpoint: string): string {
        const urlOptions: Partial<Options> = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key: string) => {
            url += `${key}=${urlOptions[key as keyof Options]}&`;
        });

        return url.slice(0, -1);
    }

    protected load(method: HTTPMethod, endpoint: string, callback: CallbackType, options: Partial<Options> = {}): void {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
