import Mustache from 'mustache';
import pageTemplate from 'bundle-text:./page.mustache';
import * as partials from './partials';
import { PageData, PageMainData } from './interfaces';
import { getLanguage } from '../helpers/getLanguage';
import { i18n } from '../i18n';
import { getUrlLanguage } from '../helpers/getUrlLanguage';

export class PageView {
  private data: PageData;

  constructor(data: PageMainData) {
    this.data = {
      template: data.template,
      page: {
        head: data.page.head,
        main: data.page.main,
        header: {},
        footer: {},
        images: {
          logo: new URL('/src/img/gruener-migrationsbeirat-muenchen.svg', import.meta.url).toString(),
        },
        links: {
          instagram: 'https://instagram.com/gruennahes_vielfaltsbuendnis?igshid=NGVhN2U2NjQ0Yg==',
          facebook: 'https://www.facebook.com/profile.php?id=100089455185993',
          mailto: 'info@gruener-migrations-beirat.de',
          imprint: `${getUrlLanguage()}/impressum`,
          home: `${getUrlLanguage()}/`,
        },
        i18n: i18n[this.getLanguage()],
      },
    };
  }

  attachObservers() {
    const stickyObserver = new IntersectionObserver(
      ([e]) => e.target.classList.toggle('pinned', e.intersectionRatio < 1),
      { threshold: [1] },
    );

    const header = document.querySelector('header');
    if (header) {
      stickyObserver.observe(header);
    }
  }

  attachListeners() {
    window.addEventListener('resize', () => {
      this.applyLayout();
    });
    document.body.addEventListener(
      'scroll',
      () => {
        console.log('s', document.body.scrollTop);
      },
      { passive: true },
    );
  }

  getLanguage() {
    return getLanguage();
  }

  private applyLayout() {
    const w = window.innerWidth;
    document.body.classList.toggle('mobile', w <= 480);
    document.body.classList.toggle('tablet', w > 480 && w < 780);
  }

  private setTitle(title: string) {
    const element = document.head.querySelector('title');
    if (element) {
      const mainTitle = i18n[this.getLanguage()].title;
      element.innerHTML = title ? `${title} ☀️${mainTitle}` : mainTitle;
    }
  }

  private setDescription(descriptiom: string) {
    const element = document.head.querySelector('meta[name="description"]');
    if (element) {
      element.setAttribute('content', descriptiom);
    }
  }

  async render() {
    const { template, page } = this.data;

    this.setTitle(page.head.title);
    this.setDescription(page.head.description);

    document.body.innerHTML = Mustache.render(pageTemplate, page, partials);
    document.body.querySelectorAll('main').forEach((element) => {
      element.innerHTML = Mustache.render(template, page, partials);
    });

    this.applyLayout();
    this.attachListeners();
    this.attachObservers();
  }
}
