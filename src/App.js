import logo from './logo.svg';
import './App.css';
import { useTranslation, Trans } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const index = 11;
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => changeLanguage('es')}>ESPAÑOL</button>
        <button onClick={() => changeLanguage('en')}>INGLES</button>
        <img src={logo} className="App-logo" alt="logo" />
        <h2>{t('bienvenido')}</h2>
      </header>
    </div>
  );
}

export default App;
