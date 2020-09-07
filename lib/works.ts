import fs from 'fs';
import path from 'path';

type GetAllWorks = () => {
  params: {
    work: string;
  };
}[];

type GetWorkData = (name: string) => string;

const worksDirectory = path.join(process.cwd(), 'works');

export const getAllWorks: GetAllWorks = () => {
  const fileNames = fs.readdirSync(worksDirectory);
  return fileNames.map((fileName) => ({
    params: {
      work: fileName.replace(/\.md$/, ''),
    },
  }));
};

export const getWorkData: GetWorkData = (name) => {
  const fullPath = path.join(worksDirectory, `${name}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  return fileContents;
};
