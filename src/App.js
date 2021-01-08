import {
  Button,
  FormControl,
  Input,
  FormHelperText,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Stock, Portfolio } from './profit2';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import NavBar from './components/NavBar';
import logo from './logo.svg';

function App() {
  //Redux
  const stocksState = useSelector((state) => state);
  const dispatch = useDispatch();

  //i18next
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const index = 11;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [stock, setStock] = useState('');
  const [date, setDate] = useState('');
  const [price, setPrice] = useState();
  const addStock = (event) => {
    event.preventDefault();
    var stockObject = new Stock(stock);
    stockObject.setPricePerDate(date, price);
    dispatch({
      type: 'ADD',
      stock: stockObject,
    });
    onClose();
  };
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
        <p>{t('portfolio')}</p>
        {stocksState.stocks.length > 0 && stocksState.stocks.map((item) => <p>{item.getCompany()}</p>)}
        <Button onClick={onOpen}>{t('addOrModifyStock')}</Button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{t('addOrModifyStock')}</ModalHeader>
            <ModalCloseButton />
            <form onSubmit={addStock}>
              <ModalBody>
                <FormControl id="stock">
                  <FormLabel>{t('stock')}</FormLabel>
                  <Input type="text" name="stock" onChange={(event) => setStock(event.currentTarget.value)} />
                  <FormHelperText>{t('formHelperStock')}</FormHelperText>
                </FormControl>
                <FormControl id="date">
                  <FormLabel>{t('date')}</FormLabel>
                  <Input type="date" name="date" onChange={(event) => setDate(event.currentTarget.value)} />
                  <FormHelperText>{t('formHelperDate')}</FormHelperText>
                </FormControl>
                <FormControl id="price">
                  <FormLabel>{t('price')}</FormLabel>
                  <Input type="number" name="price" onChange={(event) => setPrice(event.currentTarget.value)} />
                  <FormHelperText>{t('formHelperPrice')}</FormHelperText>
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  {t('close')}
                </Button>
                <Button variant="ghost" type="submit">
                  Secondary Action
                </Button>
              </ModalFooter>
            </form>
          </ModalContent>
        </Modal>
      </main>
    </div>
  );
}

export default App;
