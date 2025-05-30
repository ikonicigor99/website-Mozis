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
import { Helmet } from "react-helmet-async";
import { createContext, useState } from "react";
import { BrowserRouter } from "react-router-dom";
function App() {
  const apiKey = "AIzaSyA6uui6i6Mjvgmeq8-pPGcTZ562grRbD7E";

  const [navigation, setNavigation] = useState("Home");

  return (
    <>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Ovaj sajt je optimizovan za bolje pozicioniranje na Google-u koristeći SEO tehnike u React.js"
        />
        <meta
          name="keywords"
          content="Ciglarska paleta, paleta za ciglu, blok, drska za metle, ogrevno drvo, Mozis Zvornik, pilana Zvornik"
        />
        <meta name="author" content="Igor Ikonic" />
        <title>Pilana | Mozis Zvornik</title>
      </Helmet>
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
