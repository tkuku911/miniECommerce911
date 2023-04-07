import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header/Header';
import Home from './components/Pages/Home/Home';
import Product from './components/Pages/Product/Product';
import Cart from './components/Layout/Header/Cart/Cart';
import { useSelector } from 'react-redux';
import { Fragment } from 'react';

function App() {
    const cartIsVisible = useSelector((state) => state.ui.cartIsVisible);

    return (
      <Fragment>
          <div className={'px-32 min-h-screen'}>
              {cartIsVisible && <Cart />}
              <Header />
              <Routes>
                  <Route exact path='/' element={<Home />} />
                  <Route exact path='/product/:id' element={<Product />} />
                  {/*<Route exact path='/checkout' component={DetailController} />*/}
              </Routes>
          </div>
      </Fragment>
    );
}

export default App;
