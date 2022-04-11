import './App.css';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import { Route, Routes } from 'react-router-dom';
import OfferRoom from './Components/OfferRoom/OfferRoom';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/offer' element={<OfferRoom></OfferRoom>}></Route>
      </Routes>

    </div>
  );
}

export default App;
