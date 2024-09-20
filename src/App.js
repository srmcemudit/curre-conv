
import './App.css';

import Item from './components/Item';
import Header from './components/Header';
import CurrencyConverter from './components/CurrencyConvertor';

function App() {
  return (

      <div className='background text-center flex-col justify-center z-40 absolute top-1/4 ml-16 py-8 my-5'>
        <CurrencyConverter />
        <Header />
        <Item />
      </div>
  );
}

export default App;
