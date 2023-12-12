import { PageView } from '../../PageView';
import template from 'bundle-text:./404.mustache';

export class IndexView extends PageView {
  constructor() {
    super(template);
  }
}
