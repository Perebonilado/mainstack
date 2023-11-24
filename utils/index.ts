export function assertIsNode(e: EventTarget | null): asserts e is Node {
  if (!e || !("nodeType" in e)) {
    throw new Error(`Node expected`);
  }
}

export const formatNumber = (
  num: string | number | undefined,
  decimal: number
): string => {
  return Number(num)?.toLocaleString(undefined, {
    minimumFractionDigits: decimal,
    maximumFractionDigits: decimal,
  });
};

export const concatFirstLetterOfEachWord = (word: string): string => {
  const splitWord = word.split(" ");
  let concatWord = "";

  splitWord.forEach((sw) => {
    concatWord += sw[0];
  });

  return concatWord;
};
