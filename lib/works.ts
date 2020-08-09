import fs from "fs";
import path from "path";

const worksDirectory = path.join(process.cwd(), "works");

export const getAllWorks = () => {
  const fileNames = fs.readdirSync(worksDirectory);
  return fileNames.map((fileName) => ({
    params: {
      work: fileName.replace(/\.md$/, ""),
    },
  }));
};

export const getWorkData = (name: string) => {
  const fullPath = path.join(worksDirectory, `${name}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  return fileContents;
};
