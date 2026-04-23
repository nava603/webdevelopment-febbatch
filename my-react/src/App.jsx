import React from "react";
import { BrowserRouter, Routes, Route ,Link} from "react-router-dom";
import HOME from "./Home";
import Cart from "./Cart1";
import Pagenotfound from "./PageNotFound";


function App() {
  return (
     <BrowserRouter>
     <nav>
        <Link to="/Home">HOME</Link> 
        {" | "}
      <Link to ="/Cart1">Cart</Link>
      </nav>
        <Routes>
      <Route path="/Home" element={<HOME />} />
        <Route path="/Cart1" element={<Cart />} />
      <Route path="/PageNotFound" element={<Pagenotfound />} />
    </Routes>
     </BrowserRouter>
  )
}
export default App;