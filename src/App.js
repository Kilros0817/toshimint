import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import CreateToken from './components/CreateToken/TokenLayout/CreateToken';
import MintLayout from './components/Minter/MintLayout/MintLayout';
import Confirmation from './components/CreateToken/Confirmation/Confirmation';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/createtoken' element={<CreateToken />} />
        <Route path='/mintNFT' element={<MintLayout />} />
      </Routes>
    </>
  );
}

export default App;
