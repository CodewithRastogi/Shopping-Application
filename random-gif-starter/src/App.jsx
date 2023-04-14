import {Routes,Route} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
export default function App()
{
  return(
    <div>
      <div className="bg-slate-900">
        <Navbar/>
      </div>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
  );
}
