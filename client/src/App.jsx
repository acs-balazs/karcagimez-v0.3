import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.jsx'
import AdminPage from './pages/AdminPage.jsx'
import HomePage from './pages/HomePage.jsx'
import ProductDetailPage from './pages/ProductDetailPage.jsx'
import ShopPage from './pages/ShopPage.jsx'
import StoryPage from './pages/StoryPage.jsx'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<ShopPage />} path="/termekek" />
          <Route element={<ProductDetailPage />} path="/termek/:slug" />
          <Route element={<StoryPage />} path="/tortenet" />
          <Route element={<AdminPage />} path="/admin" />
          <Route element={<Navigate replace to="/" />} path="*" />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
