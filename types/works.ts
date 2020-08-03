export interface Work {
  TITLE: string;
  SUBTITLE: string;
  URL?: string;
  GITHUB?: string;
  TECHNOLOGIES: string[];
  IMAGE_PATH: string;
  INNER_URL: string;
}

export type Works = Work[];
