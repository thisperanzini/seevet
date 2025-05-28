import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import RaioXPage from './pages/RaioXPage';
import SuporteVidaPage from './pages/SuporteVidaPage';
import UltrassomPage from './pages/UltrassomPage';
import EletrocardiografoPage from './pages/EletrocardiografoPage';
import ContatoPage from './pages/ContatoPage';
import ProductDetailPage from './pages/ProductDetailPage'; // Import ProductDetailPage

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/raio-x" element={<RaioXPage />} />
            <Route path="/raio-x/:productId" element={<ProductDetailPage />} /> {/* Route for Raio-X products */}
            <Route path="/suporte-vida" element={<SuporteVidaPage />} />
            <Route path="/suporte-vida/:productId" element={<ProductDetailPage />} /> {/* Route for Suporte à Vida products */}
            <Route path="/ultrassom" element={<UltrassomPage />} />
            <Route path="/ultrassom/:productId" element={<ProductDetailPage />} /> {/* Route for Ultrassom products */}
            <Route path="/eletrocardiografo" element={<EletrocardiografoPage />} />
            <Route path="/eletrocardiografo/:productId" element={<ProductDetailPage />} /> {/* Route for Eletrocardiógrafo products */}
            <Route path="/contato" element={<ContatoPage />} />
            {/* Generic product detail page route, if needed, or handle within category pages */}
            <Route path="/produto/:productId" element={<ProductDetailPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
