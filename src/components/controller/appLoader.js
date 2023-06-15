import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '044e7209577f487e888e86ddd5e4ad00', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
