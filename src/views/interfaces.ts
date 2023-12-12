import { I18nData, Languages } from '../i18n/interfaces';

export interface PageHead {
  title: string;
  description: string;
}
export interface PageFooter {}

export interface PageHeader {}
export interface PageHeader {}
export interface PageImages {
  logo: string;
}
export interface PageLinks {
  instagram: string;
  facebook: string;
  mailto: string;
  imprint: string;
  home: string;
}

export interface PageData {
  template: string;
  page: {
    head: PageHead;
    main?: object;
    footer: PageFooter;
    header: PageHeader;
    images: PageImages;
    links: PageLinks;
    i18n: I18nData;
  };
}

export interface PageMainData {
  template: string;
  page: {
    head: PageHead;
    main?: object;
  };
}

export type PageI18n = Record<Languages, PageMainData>;
