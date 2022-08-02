import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Layout from "./components/common/Layout";
import Home from "./pages/Home";
import MyPage from "./pages/MyPage";
import Gacha from "./pages/Gacha";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    element={
                        <Layout>
                            <Outlet />
                        </Layout>
                    }
                >
                    <Route path="/" element={<Home />} />
                    <Route path="/gacha" element={<Gacha />} />
                    <Route path="/my" element={<MyPage />} />
                    <Route path="/*" element={<></>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
