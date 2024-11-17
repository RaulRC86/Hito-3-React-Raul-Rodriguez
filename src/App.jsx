import "./index.css"
import {Navbar} from "./components/Navbar"; 
// import Home from "./components/Home.jsx";
import {Footer} from "./components/Footer.jsx";
import Cart from "./components/Cart/Cart.jsx";

function App() {
  

  return (
    <>
      <Navbar/>
      {/* <Home/> */}
      <Cart/>
      <Footer/>
    </>
  )
}

export default App
