import { Languages } from '../../../../i18n/interfaces';

interface Member {
  head: {
    title: string;
    description: string;
  };
  info: {
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
}

export const membersBase: Record<Members, MembersBase> = {
  emily: {
    name: 'Emily Wachelka',
    image: new URL('/src/img/members/Emily-Wachelka-Migrationsbeirat.jpg', import.meta.url).toString(),
  },
  tina: {
    name: 'Tina Garway',
    image: new URL('/src/img/members/Tina-Garway-Migrationsbeirat.jpg', import.meta.url).toString(),
  },
  matu: {
    name: 'Matu Mbala',
    image: new URL('/src/img/members/Matu-Mbala-Migrationsbeirat.jpg', import.meta.url).toString(),
  },
  carmen: {
    name: 'Carmen Romano',
    image: new URL('/src/img/members/Carmen-Romano-Migrationsbeirat.jpg', import.meta.url).toString(),
  },
  bakir: {
    name: 'Bakir Lemes',
    image: new URL('/src/img/members/Bakir-Lemes-Migrationsbeirat.jpg', import.meta.url).toString(),
  },
};

export type MembersI18n = Record<Languages, Record<Members, Member>>;

export const membersI18n: MembersI18n = {
  deDE: {
    emily: {
      head: {
        title: 'Emily Wachelka',
        description: '',
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
        // focusOfWork: {
        //   list: [''],
        // },
        responsibilities: {
          list: [
            'Cosprecherin zusammen mit Carmen Romano, insbesondere zuständig für die Zusammenarbeit innerhalb des Migrationsbeirats mit der Fraktion, mit anderen progressiven Kräften und auch mit den übrigen Mitgliedern im Beirat.',
            'Co-Betreuerin der Öffentlichkeitsarbeit der Liste',
          ],
        },
      },
    },
    tina: {
      head: {
        title: 'Tina Garway',
        description: '',
      },
      info: {
        languages: 'Englisch',
      },
    },
    carmen: {
      head: {
        title: 'Carmen Romano',
        description: '',
      },
      info: {
        languages: 'Englisch',
      },
    },
    bakir: {
      head: {
        title: 'Bakir Lemes',
        description: '',
      },
      info: {
        languages: 'Englisch',
      },
    },
    matu: {
      head: {
        title: 'Matu Mbala',
        description: '',
      },
      info: {
        languages: 'Englisch',
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
