import NavBar from "../components/NavBar";
import AboutPage from "../pages/AboutPage";
import NotFound from "../pages/NotFound"
import Footer from "../components/Footer";
import { HashRouter, Routes, Route } from "react-router-dom";
import PopupContextProvider from '../contexts/PopupContext';
import Popup from '../components/Popup';
const BelleApp = () => {
    return (
        <>
            <PopupContextProvider>
                <div>
                    <Popup />
                </div>
            </PopupContextProvider>
            <header>
                <NavBar />
            </header>
            <main>
                <Routes>
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
            <Footer />
        </>
    );
}
export default BelleApp;