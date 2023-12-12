export type Languages = 'deDE' | 'enUS';

export interface I18nData {
  title: string;
  origin: string;
  languages: string;
  functions: string;
  responsibilities: string;
  focusOfWork: string;
  imprint: string;
}

export type I18n = Record<Languages, I18nData>;
