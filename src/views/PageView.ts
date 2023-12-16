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
    const language = getLanguage();

    this.data = {
      template: data.template,
      page: {
        head: data.page.head,
        main: data.page.main,
        header: {
          languages: [
            { value: 'de', label: 'Deutsch', selected: language.startsWith('de') },
            { value: 'en', label: 'English', selected: language.startsWith('en') },
          ],
        },
        footer: {},
        images: {
          logo: new URL('/src/img/gruener-migrationsbeirat-muenchen.webp', import.meta.url).toString(),
        },
        links: {
          instagram: 'https://instagram.com/gruennahes_vielfaltsbuendnis?igshid=NGVhN2U2NjQ0Yg==',
          facebook: 'https://www.facebook.com/profile.php?id=100089455185993',
          mailto: 'info@gmbmuc.de',
          imprint: `${getUrlLanguage()}/impressum`,
          home: `${getUrlLanguage()}/`,
        },
        i18n: i18n[this.getLanguage()],
      },
    };
  }

  attachObservers() {
    const stickyObserver = new IntersectionObserver(
      ([e]) => {
        const moved = e.intersectionRatio < 1;
        e.target.classList.toggle('pinned', moved);
        if (moved) {
          this.loadImages();
        }
      },
      { threshold: [1] },
    );

    const header = document.querySelector('header');
    if (header) {
      stickyObserver.observe(header);
    }
  }

  private loadImages() {
    document.querySelectorAll('img[src=""]').forEach((img) => {
      const src = (img as HTMLImageElement).dataset.src;
      if (src) {
        img.setAttribute('src', src);
        (img as HTMLImageElement).style.display = 'block';
      }
    });
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

  attachEvents() {
    document.querySelectorAll('select.language').forEach((select) => {
      (select as HTMLSelectElement).addEventListener('change', (event) => {
        const { value: lanaguege } = event.target as HTMLSelectElement;
        const translation = document.location.pathname.replace(
          /^\/(|de|en|it)$/,
          `/${lanaguege === 'de' ? '' : lanaguege}`,
        );
        document.location.href = translation.replace(/^\/(de|en|it)\//, `/${lanaguege === 'de' ? '' : lanaguege}/`);
      });
    });
  }

  getLanguage() {
    return getLanguage();
  }

  private applyLayout() {
    const h = window.innerHeight;
    const w = window.innerWidth;

    document.body.classList.toggle('xs', w < 375);
    document.body.classList.toggle('mobile', w >= 375 && w < 480);
    document.body.classList.toggle('tablet', w >= 480 && w < 768);
    document.body.classList.toggle('desktop', w >= 768);

    if (h > 1024) {
      this.loadImages();
    }
  }

  private setTitle(title?: string) {
    const titleElement = document.head.querySelector('title');
    if (titleElement) {
      const mainTitle = i18n[this.getLanguage()].title;
      const pageTitle = title ? `${title} :: ${mainTitle}` : mainTitle;
      titleElement.innerHTML = pageTitle;

      const ogTitleElement = document.head.querySelector('meta[property="og:title"]');
      ogTitleElement?.setAttribute('content', pageTitle.replace('::', '☀'));
    }
  }

  private setDescription(descriptiom: string) {
    const element = document.head.querySelector('meta[name="description"]');
    if (element) {
      element.setAttribute('content', descriptiom);
    }
  }

  private setUrl(url?: string) {
    const element = document.head.querySelector('meta[property="og:url"]');
    element?.setAttribute('content', url || document.location.href);
  }

  private setImage(url?: string) {
    const element = document.head.querySelector('meta[property="og:image"]');
    const mainImageUrl = new URL('/src/img/migrationsbeirat.jpg', import.meta.url).toString();
    element?.setAttribute('content', url || mainImageUrl);
  }

  async render() {
    const { template, page } = this.data;

    this.setTitle(page.head.title);
    this.setDescription(page.head.description);
    this.setUrl(page.head.url);
    this.setImage(page.head.image);

    document.body.innerHTML = Mustache.render(pageTemplate, page, partials);
    document.body.querySelectorAll('main').forEach((element) => {
      const article = document.createElement('article');
      article.innerHTML = Mustache.render(template, page, partials);
      element.append(article);
    });

    this.applyLayout();
    this.attachListeners();
    this.attachObservers();
    this.attachEvents();
  }
}
