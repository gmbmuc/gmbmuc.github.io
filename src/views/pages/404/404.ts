import { PageView } from '../../PageView';
import template from 'bundle-text:./404.mustache';

export class ErrorView extends PageView {
  constructor() {
    super({
      template,
      page: {
        head: {
          title: '🤷 404',
          description: 'Page not found',
        },
      },
    });
  }
}
