import "./App.css";
import Header from "./components/Header";
import About from "./pages/About";
import HomeSection from "./pages/HomeSection";
import ProizvodiComponent from "./pages/ProductsSection";
import LocationBar from "./components/LocationBar";
import GalerijaSection from "./pages/GalerySection";
// import { StateProvider } from "./context/stateContext";
import PopupGalerija from "./components/PopupGalery";
import MapContainer from "./components/Map";
import ContextProvider from "./context/useContext";
import { createContext, useState } from "react";
import { BrowserRouter } from "react-router-dom";
function App() {
  const apiKey = "AIzaSyA6uui6i6Mjvgmeq8-pPGcTZ562grRbD7E";

  const [navigation, setNavigation] = useState("Home");

  return (
    <>
      {/* <Context.Provider value> */}
      <BrowserRouter>
        <div className="App" >
          {/* <LocationBar /> */}
          <Header />
          <HomeSection />
          <About />
          <ProizvodiComponent />
          <GalerijaSection />
          <MapContainer apiKey={apiKey} />
          {/* <Footer /> */}
          {/* <PopupGalerija /> */}
        </div>
      </BrowserRouter>
      {/* </Context.Provider> */}
    </>
  );
}


export default App;
