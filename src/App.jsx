import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Join from './pages/Join';
import JoinForm from './pages/JoinForm';
import Cart from './pages/Cart';
import OrderDetail from './pages/OrderDetail';
import MyPage from './pages/MyPage';
import ProductDetail from './pages/ProductDetail';
import CategoryProductList from './pages/CategoryProductList';

function App() {

  return (
    <>
      <Header />
      <div style={{ height: "103px" }} /> {/* spacer */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path='/join/form' element={<JoinForm />} />
        <Route path='/order' element={<Cart />} />
        <Route path='/order/order-detail' element={<OrderDetail />} />
        <Route path='/my-page' element={<MyPage />} />
        <Route path='/product-detail' element={<ProductDetail />} />
        <Route path='/category-product-list/:category/:subcategory' element={<CategoryProductList />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App
