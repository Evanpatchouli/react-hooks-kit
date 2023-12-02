import { useStoreSelector } from "@/store";
import locale_cn from "./locale.cn";
import locale_en from "./locale.en";
import { PathArray, PathInto } from "@/hooks/utils/types";
import getter from "@/utils/getter";

export type messageKey = PathInto<typeof locale_en>;

const locales = {
  en: {
    ...locale_en,
  },
  cn: {
    ...locale_cn,
  },
};

export default function useLocaleSelector(path: messageKey) {
  const locale = useStoreSelector("locale") as "en" | "cn";
  // @ts-ignore
  return getter(locales[locale], path) as any;
}
