import {englishWords} from "./englishWords";
import {russianWords} from "./russianWords";

export function translate(word: string, lang: string = "ru") {
    let result = word;
    
    if (lang !== "ru") {
        if (russianWords.find((el, index) => {
            if (el === word) result = englishWords[index];
            return el === word;
        })) {
        }
    }

    return result;
}