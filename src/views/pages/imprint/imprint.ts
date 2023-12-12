import { PageView } from '../../PageView';
import { getLanguage } from '../../../helpers/getLanguage';
import { imprintI18n } from './i18n/imprint.i18n';

export class ImprintView extends PageView {
  constructor() {
    const language = getLanguage();
    const data = imprintI18n[language];
    super(data);
  }
}
