import "server-only";

type Locale = "en" | "pt";

type Job = {
  id: string;
  company: string;
  role: string;
  date: {
    start: string;
    end: string;
  };
  isCurrent: boolean;
  locale: string;
  type: string;
  description: string[];
};
interface DictionaryLoader {
  (): Promise<{
    work: {
      jobs: Job[];
    };
  }>;
}
type Dictionaries = Record<Locale, DictionaryLoader>;

const dictionaries: Dictionaries = {
  en: () => import("./data/en.json").then((module) => module.default),
  pt: () => import("./data/pt.json").then((module) => module.default),
};

const getDictionary = async (locale: Locale) => dictionaries[locale]();

export default getDictionary;
