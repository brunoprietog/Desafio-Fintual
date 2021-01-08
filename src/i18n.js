import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      es: {
        translations: {
          bienvenido: 'Bienvenido',
          portfolio: 'Portafolio',
          addOrModifyStock: 'Añade o modifica una acción',
          stock: 'Acción',
          date: 'Fecha',
          price: 'Precio',
          close: 'Cerrar',
          formHelperStock: 'Introduce el nombre de la compañía',
          formHelperDate: 'Introduce la fecha a la que quieres asignar el precio de la acción',
          formHelperPrice:
            'Introduce el precio que tenía la acción en esa fecha, usa . como separador decimal si es necesario',
        },
      },
      en: {
        translations: {
          bienvenido: 'Greetings',
          portfolio: 'Portfolio',
          addOrModifyStock: 'Add or modify a stock',
          stock: 'Stock',
          date: 'date',
          price: 'Price',
          close: 'Close',
          formHelperStock: 'Enter the company name',
          formHelperDate: 'Enter the date to which you want to assign the stock price',
          formHelperPrice: 'Enter the stock price on that date, use . as a decimal separator if necessary',
        },
      },
    },
    fallbackLng: 'en',
    debug: true,

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
