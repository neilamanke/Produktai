import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { NoPage } from '../pages/NoPage';
import { BasicLayout } from '../layout/BasicLayout';
import { CreateCardProduct } from '../components/CreateCardProduct';
import UpdateProductForm from '../components/UpdateProductForm';
import { Registration } from '../pages/Registration';
import { Login } from '../pages/Login';
import { UserProvider } from '../context/UserContext';
import { UserLayout } from '../layout/UserLayout';
import { CategoryList } from '../components/CategoryList';
import { UserProfile } from '../pages/UserProfile';
import { AdminLayout } from '../layout/AdminLayout';
import { Product } from '../pages/Product';
import { ProductCardInfo } from '../pages/ProductCardInfo';
import '@fortawesome/fontawesome-free/css/all.css';



function App() {
  return (

    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route Component={BasicLayout}>
            <Route index path="/" element={<HomePage />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/productcardinfo/:id" element={<ProductCardInfo />} />
          </Route>
          <Route Component={UserLayout}>
            <Route path="/product" element={<Product />} />
            <Route path="/profile" element={<UserProfile />} />
          </Route>
          <Route Component={AdminLayout}>
            <Route path="/updateProduct/:id" element={<UpdateProductForm />} />
            <Route path="/addcardmov" element={<CreateCardProduct />} />
            <Route path="/category" element={<CategoryList />} />
          </Route>
          <Route Component={BasicLayout}>
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
