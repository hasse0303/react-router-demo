import React, { Suspense, lazy } from 'react';
import { Routes, Route} from 'react-router-dom'
import './App.css';
import { Home } from './components/Home';
// import { About } from './components/About';
import { Navbar } from './components/Navbar';
import { OrderSummary } from './components/OrderSummary';
import { PageNotFound } from './components/PageNotFound';
import { Products } from './components/Products';
import { FeaturedProduct } from './components/FeaturedProduct';
import { NewProduct } from './components/NewProduct';
import { Users } from './components/Users';
import { UserDetail } from './components/UserDetail';
const LazyAbout = lazy(() => import ('./components/About'));

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<Suspense fallback="Loading text..."><LazyAbout /></Suspense>} />
        <Route path='order-summary' element={<OrderSummary />} />
        <Route path='products' element={<Products />}>
          <Route index element={<FeaturedProduct />} />
          <Route path='featured' element={<FeaturedProduct />} />
          <Route path='new' element={<NewProduct />} />
        </Route>
        <Route path='users' element={<Users />}>
          <Route path=':id' element={<UserDetail />} />
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
