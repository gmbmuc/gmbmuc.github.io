import { PageView } from '../../PageView';
import { pageI18n } from './i18n/main.i18n';
import { getLanguage } from '../../../helpers/getLanguage';
import { getUrlLanguage } from '../../../helpers/getUrlLanguage';

export class MainView extends PageView {
  constructor() {
    const language = getLanguage();
    const urlLanguage = getUrlLanguage();
    const data = pageI18n[language];

    data.page.main = {
      members: [
        {
          name: 'Tina Garway',
          image: new URL('/src/img/members/Tina-Garway-Migrationsbeirat.webp', import.meta.url).toString(),
          link: `${urlLanguage}/person/tina-garway`,
        },
        {
          name: 'Bakir Lemes',
          image: new URL('/src/img/members/Bakir-Lemes-Migrationsbeirat.webp', import.meta.url).toString(),
          link: `${urlLanguage}/person/bakir-lemes`,
        },
        {
          name: 'Matu Mbala',
          image: new URL('/src/img/members/Matu-Mbala-Migrationsbeirat.webp', import.meta.url).toString(),
          link: `${urlLanguage}/person/matu-mbala`,
        },
        {
          name: 'Carmen Romano',
          image: new URL('/src/img/members/Carmen-Romano-Migrationsbeirat.webp', import.meta.url).toString(),
          link: `${urlLanguage}/person/carmen-romano`,
        },
        {
          name: 'Emily Wachelka',
          image: new URL('/src/img/members/Emily-Wachelka-Migrationsbeirat.webp', import.meta.url).toString(),
          link: `${urlLanguage}/person/emily-wachelka`,
        },
      ],
    };

    super(data);
  }
}
