import { PageI18n } from '../../../interfaces';
import templateDeDe from 'bundle-text:./main.deDE.mustache';
import templateEnUs from 'bundle-text:./main.enUS.mustache';

export const pageI18n: PageI18n = {
  deDE: {
    template: templateDeDe,
    page: {
      head: {
        title: '',
        description: '',
      },
    },
  },
  enUS: {
    template: templateEnUs,
    page: {
      head: {
        title: '',
        description: '',
      },
    },
  },
};
