import Header from './components/Header/Header';
import './App.css';
import Navbar from './components/NavBar/Navbar';
import Navb from './components/NavBarB/Navb';
import Products from './components/Products/Products';

const App = () => {
  return (
    <div>

      <Navbar />
      <Navb />
      <Header />
      <Products />

    </div>
  );
}

export default App;
