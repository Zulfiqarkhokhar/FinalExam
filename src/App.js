import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import AllProducts from "./components/AllProducts";
import Product from "./components/Product";
import LandingPage from "./components/LandingPage";
import About from "./components/About";

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path={"/"} element={<LandingPage />}></Route>
        <Route path={"/allproducts"} element={<AllProducts />}></Route>
        <Route path={"/product/:productId"} element={<Product />}></Route>
        <Route path={"/about"} element={<About />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}
