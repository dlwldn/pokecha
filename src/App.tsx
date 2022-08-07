import { Outlet, Route, Routes } from "react-router-dom";
import Layout from "./components/common/Layout";
import Home from "./pages/Home";
import MyPage from "./pages/MyPage";
import Gacha from "./pages/Gacha";
import { useRecoilValue } from "recoil";
import { modalState } from "./lib/store/client/modal";
import Modal from "./components/common/Modal";

function App() {
    const { showModal } = useRecoilValue(modalState);

    return (
        <Routes>
            <Route
                element={
                    <>
                        <Layout>
                            <Outlet />
                        </Layout>
                        {showModal && <Modal />}
                    </>
                }
            >
                <Route path="/" element={<Home />} />
                <Route path="/gacha" element={<Gacha />} />
                <Route path="/my" element={<MyPage />} />
                <Route path="/*" element={<></>} />
            </Route>
        </Routes>
    );
}

export default App;
