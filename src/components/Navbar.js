import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import app_logo from "../resources/app-logo.jpg"

export const Navbar = () => {
  const [btnName, setbtnName] = useState("Login");
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className=" shadow-lg text-xl font-[Poppins]  bg-white">
      <nav className="flex justify-between items-center w-[92%] mx-auto">
      <Link to="/">
          <img className="w-28 m-2 cursor-pointer" src={app_logo} alt="Logo" />
        </Link>


        <ul className="flex p-4 m-4 gap-[3vw] items-center">
          <li className="px-4 font-extrabold hover:text-gray-500">
          <Link to="/"> Home</Link>
          </li>

          <li className="px-4  font-extrabold hover:text-gray-500">
            About us
          </li>

          <li className="px-4 font-extrabold hover:text-gray-500">
          <Link to="/cart">Cart ({cartItems.length} Items)</Link>
          </li>
        </ul>
        <button
          className="px-5 py-2 font-bold bg-green-200 rounded-full hover:bg-green-100"
          onClick={() => {
            btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
          }}
        >
          {btnName}
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
