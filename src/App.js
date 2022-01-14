import Header from './components/header/Header';
import Menu from './components/menu/Menu';
import './App.css'
import { useState } from 'react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className='app'>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className='sections'>
      </div>
    </div>
  );
}

export default App;
