import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export class App {
  configureRouter(config, router){
    config.title = 'Cake Factory';
    config.map([
      { route: ['','factory'],  moduleId: './factory',      nav: true, title:'Factory' },
      { route: ['ideas'],  moduleId: './ideas',      nav: true, title:'Ideas' }
    ]);

    this.router = router;
  }
}
