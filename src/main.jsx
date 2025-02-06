import { Fragment, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/style/main.css';
import App from './App.jsx';
import { ToastContainer } from 'react-toast';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import rutranslate from "./i18n/ru.json";
import uztranslate from "./i18n/uz.json";


i18n.use(initReactI18next).init({
  resources: {
    uz: { translation: uztranslate },
    ru: { translation: rutranslate },
  },
  lng:'ru',
  fallbackLng:'uz',
});

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Fragment>
      <App />
      <ToastContainer position='top-right' />
    </Fragment>

  </StrictMode>,
)
