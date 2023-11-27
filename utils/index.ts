import { months } from "../constants";

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

export const formatDateMONTHDDYYY = (date: string) => {
  const dateObj = new Date(date);
  const month = dateObj.getUTCMonth();
  const date_ = dateObj.getUTCDate();
  const year = dateObj.getUTCFullYear();

  return `${months[month]} ${String(date_).padStart(2, "0")}, ${year}`;
};

export const formatCamelCaseToIndividualWords = (camelCaseWord?: string) => {
  if (camelCaseWord) {
    return camelCaseWord.replace(/([a-z0-9])([A-Z])/g, "$1 $2").toLowerCase();
  }
  return "";
};
