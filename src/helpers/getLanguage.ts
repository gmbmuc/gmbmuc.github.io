import { Languages } from '../i18n/interfaces';

export const getLanguage = (): Languages => {
  const { pathname } = window.location;
  const langMatch = pathname.match(/^\/(en|de)/);
  if (langMatch) {
    switch (langMatch[1]) {
      case 'en':
        return 'enUS';
    }
  }
  return 'deDE';
};
