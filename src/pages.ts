import { existsSync, mkdirSync, copyFileSync } from 'fs';
import { join } from 'path';

const copyIndex = (page: string) => {
  const indexFile = join(__dirname, '../docs/index.html');
  const pathArray = page.split('/');
  if (pathArray.length === 1) {
    copyFileSync(indexFile, join(__dirname, `../docs/${pathArray[0]}.html`));
  } else {
    const fileName = `${pathArray[pathArray.length - 1]}.html`;
    const filePath = pathArray.slice(0, pathArray.length - 1).join('/');
    const destinationFolder = join(__dirname, `../docs/${filePath}`);
    const destinationFile = join(destinationFolder, fileName);

    if (!existsSync(destinationFolder)) {
      mkdirSync(destinationFolder, { recursive: true });
    }

    copyFileSync(indexFile, destinationFile);
  }
};

const pages = [
  'person/emily-wachelka',
  'person/carmen-romano',
  'person/matu-mbala',
  'person/bakir-lemes',
  'person/tina-garway',
  'impressum',
  '404',
];

pages.forEach((page) => {
  copyIndex(page);
});
