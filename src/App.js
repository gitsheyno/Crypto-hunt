
import Home from './pages/Home';
import Header from './components/Header';
import CoinPage from './pages/CoinPage';
import { Route, Routes } from 'react-router-dom'
import { Global, css } from '@emotion/react'

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/coins/:id' element={<CoinPage />} />
      </Routes>
    </div>
  );
}

export default App;
