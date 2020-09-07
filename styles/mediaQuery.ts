interface Breakpoints {
  [key: string]: number;
}

const breakpoints: Breakpoints = {
  xxxs: 400,
  xxs: 500,
  xs: 600,
  xsm: 750,
  sm: 960,
  md: 1280,
  lg: 1920,
};

const mq = (bp: string | number): string => `@media (max-width: ${breakpoints[bp] || bp}px)`;

export default mq;
