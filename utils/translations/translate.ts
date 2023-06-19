import {russian} from "./russian";
import {english} from "./english";

export function translate(word: string, language: string = "ru") {
  let result = word;

  if (language !== "ru") {
    russian.find((el, index) => {
      if (el === word) result = english[index];
      return el === word;
    });
  }

  return result;
}
