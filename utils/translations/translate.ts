import {russian} from "./russian";
import {english} from "./english";

export function translate(word: string, language: string) {
  let result = word;

  if (language !== "RU") {
    russian.find((el, index) => {
      if (el === word) result = english[index];
      return el === word;
    });
  }

  if (language === "RU") {
    english.find((el, index) => {
      if (el === word) result = russian[index];
      return el === word;
    });
  }

  return result;
}
