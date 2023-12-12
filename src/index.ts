import { MainView } from './views/pages/main/main';
import { MembersView } from './views/pages/members/members';
import { Members } from './views/pages/members/i18n/members.i18n';
import { ImprintView } from './views/pages/imprint/imprint';

const getRoute = () => {
  const { pathname } = window.location;
  const route = pathname.replace(/^\/(en|de)/, '');

  const personMatch = route.match('^/person/([a-z-]+)$');
  if (personMatch) {
    return {
      path: '/person',
      param: personMatch[1],
    };
  }

  return {
    path: route || '/',
    param: '',
  };
};

(async () => {
  const initGreen = async () => {
    const route = getRoute();
    let view;

    switch (route.path) {
      case '/person':
        const member = route.param.split('-')[0] as Members;
        view = new MembersView(member);
        break;
      case '/impressum':
      case '/imprint':
        view = new ImprintView();
        break;
      default:
        view = new MainView();
        break;
    }

    view.render();
  };

  if (document.body) {
    await initGreen();
  } else {
    document.addEventListener('DOMContentLoaded', async () => {
      await initGreen();
    });
  }
})();
