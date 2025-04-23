import NavBar from "../components/NavBar";
import AboutPage from "../pages/AboutPage";
import NotFound from "../pages/NotFound"
import { HashRouter, Routes, Route } from "react-router-dom";
const BelleApp = () => {
    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                <Routes>
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
        </>
    );
}
export default BelleApp;