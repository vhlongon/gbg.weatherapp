export const convertDate = (dt: number) =>
  new Date(dt * 1000).toLocaleDateString("se-SE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export const getAverageTemp = (...args: number[]) => {
  const total = args.reduce((acc, val) => acc + val, 0);
  return Number((total / args.length).toFixed(2));
};

export const getMedianTemp = (...args: number[]) => {
  const arrSort = args.sort();
  const len = args.length;
  const mid = Math.ceil(len / 2);

  const median =
    len % 2 == 0 ? (arrSort[mid] + arrSort[mid - 1]) / 2 : arrSort[mid - 1];

  return Number(median.toFixed(2));
};
