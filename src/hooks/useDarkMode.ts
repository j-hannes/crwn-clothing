export const useDarkMode = () => {
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  return mq.matches;
};
