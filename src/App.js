import './App.css';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Vouchers from './components/Vouchers/Vouchers';

function App() {
  return (
    <div>
      <Header></Header>
      <Vouchers></Vouchers>
      <Products></Products>
    </div>
  );
}

export default App;
