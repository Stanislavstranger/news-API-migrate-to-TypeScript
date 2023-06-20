import Loader from './loader';
import { IDrawData } from '../interface/interface';

enum ApiConfig {
    url = 'https://newsapi.org/v2/',
    apiKey = '044e7209577f487e888e86ddd5e4ad00',
}

class AppLoader extends Loader<IDrawData> {
    public constructor() {
        super(ApiConfig.url, {
            apiKey: ApiConfig.apiKey,
        });
    }
}

export default AppLoader;
