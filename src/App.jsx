import { useSelector } from 'react-redux';
import Header from './components/header/Header';
import Products from './components/products/Products';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import ProductsPage from './pages/ProductsPage';
import CategoriesPages from './pages/CategoriesPages';
import ProductsSinglePage from './pages/ProductsSinglePage';

function App() {
  const modeTheme = useSelector((state) => state.modeslice.mode);

  return (
    <div className={modeTheme ? 'app ligth-mode' : 'app dark-mode'}>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:productId" element={<ProductsSinglePage />} />
        <Route path="/categories" element={<CategoriesPages />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App
