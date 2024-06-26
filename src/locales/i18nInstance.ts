import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'

import fr from 'locales/fr'
import en from 'locales/en'
import { FR, EN } from 'config/constant/common'

const initialLanguage = FR

const i18nInstance = i18n.createInstance()

i18nInstance.use(initReactI18next).init({
  resources: {
    fr: {
      translation: fr,
    },
    en: {
      translation: en,
    },
  },
  lng: initialLanguage,
  fallbackLng: FR,
  interpolation: {
    escapeValue: false,
  },
})

export default i18nInstance
