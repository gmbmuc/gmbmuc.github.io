import { readFileSync, writeFileSync, lstatSync, readdirSync, existsSync, mkdirSync, copyFileSync } from 'fs';
import { join, extname } from 'path';

// Function to copy a folder
const copyImages = (sourceFolder: string, destinationFolder: string) => {
  // Create destination folder if it does not exist
  if (!existsSync(destinationFolder)) {
    mkdirSync(destinationFolder, { recursive: true });
  }

  // Read all the files and folders from source
  let items = readdirSync(sourceFolder);

  items.forEach((item) => {
    let sourceItem = join(sourceFolder, item);
    let destinationItem = join(destinationFolder, item);

    // Check if the item is a directory
    if (lstatSync(sourceItem).isDirectory()) {
      // Recursively copy the directory
      copyImages(sourceItem, destinationItem);
    } else {
      // Copy the file
      if (extname(sourceItem).toLowerCase() === '.jpg') {
        copyFileSync(sourceItem, destinationItem);
      }
    }
  });
};

const copyIndex = (page: Page) => {
  const indexFile = join(__dirname, '../docs/index.html');
  let indexFileContent = readFileSync(indexFile, 'utf8');

  const baseUrl = 'https://gruener-migrationsbeirat-muenchen.de';

  indexFileContent = indexFileContent.replace(new RegExp('"og_title"', 'g'), `"${page.og.title}"`);
  indexFileContent = indexFileContent.replace(
    new RegExp('"/img/migrationsbeirat.jpg"', 'g'),
    `"${baseUrl}/${page.og.image}"`,
  );
  indexFileContent = indexFileContent.replace(
    new RegExp('"og_url"', 'g'),
    `"${baseUrl}/${page.path === 'index' ? '' : page.path}"`,
  );

  const pathArray = page.path.split('/');
  if (pathArray.length === 1) {
    writeFileSync(join(__dirname, `../docs/${pathArray[0]}.html`), indexFileContent, 'utf8');
  } else {
    const fileName = `${pathArray[pathArray.length - 1]}.html`;
    const filePath = pathArray.slice(0, pathArray.length - 1).join('/');
    const destinationFolder = join(__dirname, `../docs/${filePath}`);
    const destinationFile = join(destinationFolder, fileName);

    if (!existsSync(destinationFolder)) {
      mkdirSync(destinationFolder, { recursive: true });
    }

    writeFileSync(destinationFile, indexFileContent, 'utf8');
  }
};

interface Page {
  path: string;
  og: {
    image: string;
    title: string;
  };
}

const titleDeDe = 'Grüner Migrationsbeirat München';
const titleEnUs = 'Green Migration Advisory Board Munich';

const pages: Page[] = [
  {
    path: 'person/emily-wachelka',
    og: {
      image: 'members/Emily-Wachelka-Migrationsbeirat.jpg',
      title: `Emily Wachelka :: ${titleDeDe}`,
    },
  },
  {
    path: 'en/person/emily-wachelka',
    og: {
      image: 'members/Emily-Wachelka-Migrationsbeirat.jpg',
      title: `Emily Wachelka :: ${titleEnUs}`,
    },
  },
  {
    path: 'person/carmen-romano',
    og: {
      image: 'img/members/Carmen-Romano-Migrationsbeirat.jpg',
      title: `Carmen Romano :: ${titleDeDe}`,
    },
  },
  {
    path: 'en/person/carmen-romano',
    og: {
      image: 'img/members/Carmen-Romano-Migrationsbeirat.jpg',
      title: `Carmen Romano :: ${titleEnUs}`,
    },
  },
  {
    path: 'person/matu-mbala',
    og: {
      image: 'img/members/Matu-Mbala-Migrationsbeirat.jpg',
      title: `Matu Mbala :: ${titleDeDe}`,
    },
  },
  {
    path: 'en/person/matu-mbala',
    og: {
      image: 'img/members/Matu-Mbala-Migrationsbeirat.jpg',
      title: `Matu Mbala :: ${titleEnUs}`,
    },
  },
  {
    path: 'person/bakir-lemes',
    og: {
      image: 'img/members/Bakir-Lemes-Migrationsbeirat.jpg',
      title: `Bakir Lemes :: ${titleDeDe}`,
    },
  },
  {
    path: 'en/person/bakir-lemes',
    og: {
      image: 'img/members/Bakir-Lemes-Migrationsbeirat.jpg',
      title: `Bakir Lemes :: ${titleEnUs}`,
    },
  },
  {
    path: 'person/tina-garway',
    og: {
      image: 'img/members/Tina-Garway-Migrationsbeirat.jpg',
      title: `Tina Garway :: ${titleDeDe}`,
    },
  },
  {
    path: 'en/person/tina-garway',
    og: {
      image: 'img/members/Tina-Garway-Migrationsbeirat.jpg',
      title: `Tina Garway :: ${titleEnUs}`,
    },
  },
  {
    path: 'impressum',
    og: {
      image: '',
      title: `Impressum :: ${titleDeDe}`,
    },
  },
  {
    path: 'en/impressum',
    og: {
      image: '',
      title: `Imprint :: ${titleDeDe}`,
    },
  },
  {
    path: '404',
    og: {
      image: '',
      title: '404',
    },
  },
  {
    path: 'en',
    og: {
      image: 'img/migrationsbeirat.jpg',
      title: titleEnUs,
    },
  },

  // thid entry needs to be last
  {
    path: 'index',
    og: {
      image: 'img/migrationsbeirat.jpg',
      title: titleDeDe,
    },
  },
];

copyImages(join(__dirname, 'img'), join(__dirname, '../docs/img'));

pages.forEach((page) => {
  copyIndex(page);
});
