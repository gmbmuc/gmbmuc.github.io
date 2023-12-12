import { existsSync, mkdirSync, copyFileSync } from 'fs';
import { join, basename } from 'path';

const copyIndex = (relativeDestinationFolder: string) => {
  const indexFile = join(__dirname, '../docs/index.html');
  const destinationFolder = join(__dirname, `../docs/${relativeDestinationFolder}`);
  const destinationFile = join(destinationFolder, basename(indexFile));

  if (!existsSync(destinationFolder)) {
    mkdirSync(destinationFolder, { recursive: true });
  }

  copyFileSync(indexFile, destinationFile);
};

const pages = [
  'person/emily-wachelka',
  'person/carmen-romano',
  'person/matu-mbala',
  'person/bakir-lemes',
  'person/tina-garway',
  'impressum',
];

copyFileSync(join(__dirname, '../docs/index.html'), join(__dirname, '../docs/404.html'));

pages.forEach((page) => {
  copyIndex(page);
});
