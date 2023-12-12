import { PageView } from '../../PageView';
import { Members, membersBase, membersI18n } from './i18n/members.i18n';
import { getLanguage } from '../../../helpers/getLanguage';
import { PageMainData } from '../../interfaces';
import template from 'bundle-text:./members.mustache';

export class MembersView extends PageView {
  constructor(member: Members) {
    const language = getLanguage();
    const memberI18n = membersI18n[language][member];
    const memberBase = membersBase[member];

    const data: PageMainData = {
      template,
      page: {
        head: {
          ...memberI18n.head,
          image: memberBase.ogImage,
        },
        main: {
          ...memberBase,
          ...memberI18n,
        },
      },
    };

    super(data);
  }
}
