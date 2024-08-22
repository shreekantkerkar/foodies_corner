import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import Body from "./components/Body";
import RestaurantMenu from "./components/RestaurantMenu";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import appStore from "./resources/appStore";


function App() {
  return (
    <BrowserRouter>
    <Provider store={appStore}>
    <div>
      <Navbar/>
      <Routes>
        <Route path = '/' element={<Body></Body>}></Route>
        <Route path="/restaurants/:resId" element={<RestaurantMenu/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
    </div>
    </Provider>
    </BrowserRouter>
  );
}

export default App;
