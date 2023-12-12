import { PageMainData } from '../../../interfaces';
import { Languages } from '../../../../i18n/interfaces';
import template from 'bundle-text:../imprint.mustache';

export const imprintI18n: Record<Languages, PageMainData> = {
  deDE: {
    template,
    page: {
      head: {
        title: 'Impressum',
        description: '',
      },
    },
  },
  enUS: {
    template,
    page: {
      head: {
        title: 'Imprint',
        description: '',
      },
    },
  },
};
