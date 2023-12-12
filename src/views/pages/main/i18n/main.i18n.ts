import { PageI18n } from '../../../interfaces';
import templateDeDe from 'bundle-text:./main.deDE.mustache';
import templateEnUs from 'bundle-text:./main.enUS.mustache';

const image = new URL('/src/img/migrationsbeirat.jpg', import.meta.url).toString();

export const pageI18n: PageI18n = {
  deDE: {
    template: templateDeDe,
    page: {
      head: {
        description:
          'Der Migrationsbeirat ist die Interessenvertretung der Münchner*innen mit Migrationsgeschichte. Seine Aufgabe ist es, den Stadtrat und die Verwaltung in allen Fragen, die die ausländische Bevölkerung in München vertreten, zu beraten.',
        image,
      },
    },
  },
  enUS: {
    template: templateEnUs,
    page: {
      head: {
        description:
          'The Migration Advisory Board represents the interests of Munich residents with a migration history. His job is to advise the city council and the administration on all issues relating to the foreign population in Munich.',
        image,
      },
    },
  },
};
