import "server-only";

type Locale = "en" | "pt";

interface DictionaryLoader {
  (): Promise<any>;
}
type Dictionaries = Record<Locale, DictionaryLoader>;

const dictionaries: Dictionaries = {
  en: () => import("./data/en.json").then((module) => module.default),
  pt: () => import("./data/pt.json").then((module) => module.default),
};



const getDictionary = async (locale: Locale) => dictionaries[locale]();

export default getDictionary;
