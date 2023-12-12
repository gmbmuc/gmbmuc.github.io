import { Languages } from '../../../../i18n/interfaces';

interface Member {
  head: {
    title: string;
    description: string;
  };
  info: {
    about?: string;
    languages?: string;
    origin?: string;
    functions?: {
      list: string[];
    };
    focusOfWork?: {
      list: string[];
    };
    responsibilities?: {
      list: string[];
    };
  };
}

export type Members = 'emily' | 'tina' | 'carmen' | 'bakir' | 'matu';

interface MembersBase {
  name: string;
  image: string;
  ogImage: string;
}

export const membersBase: Record<Members, MembersBase> = {
  emily: {
    name: 'Emily Wachelka',
    image: new URL('/src/img/members/Emily-Wachelka-Migrationsbeirat.webp', import.meta.url).toString(),
    ogImage: new URL('/src/img/members/Emily-Wachelka-Migrationsbeirat.jpg', import.meta.url).toString(),
  },
  tina: {
    name: 'Tina Garway',
    image: new URL('/src/img/members/Tina-Garway-Migrationsbeirat.webp', import.meta.url).toString(),
    ogImage: new URL('/src/img/members/Tina-Garway-Migrationsbeirat.jpg', import.meta.url).toString(),
  },
  matu: {
    name: 'Matu Mbala',
    image: new URL('/src/img/members/Matu-Mbala-Migrationsbeirat.webp', import.meta.url).toString(),
    ogImage: new URL('/src/img/members/Matu-Mbala-Migrationsbeirat.jpg', import.meta.url).toString(),
  },
  carmen: {
    name: 'Carmen Romano',
    image: new URL('/src/img/members/Carmen-Romano-Migrationsbeirat.webp', import.meta.url).toString(),
    ogImage: new URL('/src/img/members/Carmen-Romano-Migrationsbeirat.jpg', import.meta.url).toString(),
  },
  bakir: {
    name: 'Bakir Lemes',
    image: new URL('/src/img/members/Bakir-Lemes-Migrationsbeirat.webp', import.meta.url).toString(),
    ogImage: new URL('/src/img/members/Bakir-Lemes-Migrationsbeirat.jpg', import.meta.url).toString(),
  },
};

export type MembersI18n = Record<Languages, Record<Members, Member>>;

export const membersI18n: MembersI18n = {
  deDE: {
    emily: {
      head: {
        title: 'Emily Wachelka',
        description: 'Stimmberechtigtes Mitglied im Ausschuss 1 für Bildung, Erziehung, Kinder und Jugend.',
      },
      info: {
        origin: 'USA',
        languages: 'Englisch, Deutsch, Italienisch, ein bisschen Spanisch',
        functions: {
          list: [
            'Stimmberechtigtes Mitglied im Ausschuss 1 für Bildung, Erziehung, Kinder und Jugend',
            'Beratendes Mitglied in Ausschuss 4 (Ausschuss für Aufenthalts- und Zuwanderungsrecht mit Rassismus,Diskriminierung und Flüchtlingspolitik)',
            'Beratendes Mitglied in Ausschuss 5 (Arbeit, Wirtschaft, Umwelt, Stadtplanung)',
            'Sprecherin der Kommission für die Zukunft des Beirats',
          ],
        },
        responsibilities: {
          list: [
            'Co-Sprecherin zusammen mit Carmen Romano, insbesondere zuständig für die Zusammenarbeit innerhalb des Migrationsbeirats mit der Fraktion, mit anderen progressiven Kräften und auch mit den übrigen Mitgliedern im Beirat.',
            'Co-Betreuerin der Öffentlichkeitsarbeit der Liste',
          ],
        },
      },
    },
    tina: {
      head: {
        title: 'Tina Garway',
        description:
          'Sprecherin des Ausschusses für Aufenthalts- und Zuwanderungsrecht mit Rassismus, Diskriminierung und Flüchtlingspolitik und somit Mitglied des Erweiterten Vorstandes.',
      },
      info: {
        languages: 'Englisch, Italienisch, Deutsch, Französisch',
        origin: 'Liberia',
        functions: {
          list: [
            'Sprecherin des Ausschusses für Aufenthalts- und Zuwanderungsrecht mit Rassismus, Diskriminierung und Flüchtlingspolitik und somit Mitglied des Erweiterten Vorstandes',
            'Beratendes Mitglied des Ausschusses für Soziales, Gesundheit und Frauenangelegenheiten',
          ],
        },
        focusOfWork: {
          list: [
            'Vielfaltsorientierte und Diskriminierungskritische Bildungsarbeit / – Organisationsentwicklung',
            'Empowerment von BIPoC',
          ],
        },
      },
    },
    carmen: {
      head: {
        title: 'Carmen Romano',
        description:
          'Mitglied im Ausschuss für Zuschussvergaben und Ausschuss 4 (Ausschuss für Aufenthalts- und Zuwanderungsrecht mit Rassismus,Diskriminierung und Flüchtlingspolitik).',
      },
      info: {
        languages: 'Italienisch, Deutsch, Englisch, ein bisschen Spanisch',
        origin: 'Italien',
        functions: {
          list: [
            'Mitglied im Ausschuss für Zuschussvergaben und Ausschuss 4 (Ausschuss für Aufenthalts- und Zuwanderungsrecht mit Rassismus,Diskriminierung und Flüchtlingspolitik)',
            'Leiterin der Arbeitsgruppe „Diskriminierung auf dem Wohnungsmarkt“',
          ],
        },
        responsibilities: {
          list: [
            'Co-Sprecherin zusammen mit Emily Wachelka, insbesondere zuständig für die Zusammenarbeit außerhalb des Migrationsbeirates mit unterschiedlichen Parteieingliederungen, weitere Migrantischen Organisationen usw.',
            'Co-Betreuerin der Öffentlichkeitsarbeit der Liste',
          ],
        },
      },
    },
    bakir: {
      head: {
        title: 'Bakir Lemes',
        description:
          'Bakir studiert Politikwissenschaften an der TU München. Er arbeitet bei PwC und ist Mitglied des Europäischen Jugendparlaments. Er ist Sprecher des AK für Migration und Flucht der Grünen München und Ortsvertreter der Grünen Jugend München Mitte / West.  Seit 2017 ist München seine Heimat.',
      },
      info: {
        about:
          'Bakir studiert Politikwissenschaften an der TU München. Er arbeitet bei PwC und ist Mitglied des Europäischen Jugendparlaments. Er ist Sprecher des AK für Migration und Flucht der Grünen München und Ortsvertreter der Grünen Jugend München Mitte / West.  Seit 2017 ist München seine Heimat.',
        languages: 'Bosnisch, Deutsch, Englisch, Hebräisch',
        origin: 'Bosnien und Herzegowina',
        functions: {
          list: [
            'Stimmberechtigtes Mitglied im Ausschuss für Aufenthalts- und Zuwanderungsrecht mit Rassismus,Diskriminierung und Flüchtlingspolitik',
            'Beratendes Mitglied im Ausschuss für Arbeit und Wirtschaft, Stadtplanung, Mobilität und Umwelt',
            'Sowie im Ausschuss für Bildung und Erziehung, Kinder, Jugend und Familie',
          ],
        },
      },
    },
    matu: {
      head: {
        title: 'Matu Mbala',
        description:
          'Matu arbeitet für die Landeshauptstadt München, Sozialreferat, und ist Mitglied im Bezirksausschuss Schwabing West. Stadtplanung, Umwelt, Wirtschaft, Sport und Freizeit sind seine Interessensgebiete.',
      },
      info: {
        about:
          'Matu arbeitet für die Landeshauptstadt München, Sozialreferat, und ist Mitglied im Bezirksausschuss Schwabing West. Stadtplanung, Umwelt, Wirtschaft, Sport und Freizeit sind seine Interessensgebiete.',
        languages: 'Deutsch, Englisch, Italienisch, Grundkenntnisse Katalanisch',
        origin: 'Italien',
        functions: {
          list: ['Stimmberechtigtes Mitglied im Ausschuss A5 – Arbeit, Wirtschaft, Stadtplanung, Mobilität und Umwelt'],
        },
      },
    },
  },
  enUS: {
    emily: {
      head: {
        title: 'Emily Wachelka',
        description: '',
      },
      info: {
        languages: 'English',
      },
    },
    tina: {
      head: {
        title: 'Tina Garway',
        description: '',
      },
      info: {
        languages: 'English',
      },
    },
    carmen: {
      head: {
        title: 'Carmen Romano',
        description: '',
      },
      info: {
        languages: 'English',
      },
    },
    bakir: {
      head: {
        title: 'Bakir Lemes',
        description: '',
      },
      info: {
        languages: 'English',
      },
    },
    matu: {
      head: {
        title: 'Matu Mbala',
        description: '',
      },
      info: {
        languages: 'English',
      },
    },
  },
};
