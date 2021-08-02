/** @format */
import Config from 'react-native-config';

import {translations} from '../i18n';

import {DEFAULT_SETTINGS} from '../constants';

const handleTranslate = (translation, text) => {
  if (translation.has(text)) {
    return translation.get(text);
  }

  if (Config.DEVELOPMENT === 'true') {
    throw new Error(`Please add «${text}» to the i18n file.`);
  }

  return text;
};

export const useTranslation = () => {
  const translation = translations.get(DEFAULT_SETTINGS.language);

  return handleTranslate.bind(this, translation);
};
