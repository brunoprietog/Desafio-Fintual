import logo from './logo.svg';
import './App.css';
import { useTranslation, Trans } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import NavBar from './components/NavBar';
function App() {
  //Redux
  const counter = useSelector((state) => state);
  const dispatch = useDispatch();

  //i18next
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const index = 11;
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <button onClick={() => changeLanguage('es')}>ESPAÑOL</button>
        <button onClick={() => changeLanguage('en')}>INGLES</button>
        <img src={logo} className="App-logo" alt="logo" />
        <h2>{t('bienvenido')}</h2>
      </header>
      <main>
        <p>{counter.num}</p>
        <button
          onClick={() =>
            dispatch({
              type: 'INCREMENT',
              step: 1,
            })
          }
        >+</button>
      </main>
    </div>
  );
}

export default App;
