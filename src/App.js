import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../src/components/Body/reset.css';
import '../src/components/Body/body.css';
import Myshop from './components/Pages/Shop/MyShop/myshop.index';
import HomePage from './components/Pages/Home/home.index';
import Menu from './components/Menu/menu.index.jsx';

function App() {
  return (
    <Router>
      <Menu /> {/* Menu principal */}
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Rota para a página inicial */}
        <Route path="/MeuCarrinho" element={<Myshop />} /> {/* Rota para a página de loja */}
      </Routes>
    </Router>
  );
}

export default App;
