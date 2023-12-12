import { getLanguage } from './getLanguage';

export const getUrlLanguage = () => {
  const language = getLanguage();
  if (language === 'deDE') {
    return '';
  }
  return `/${language.substring(0, 2)}`;
};
