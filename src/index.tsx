import ReactDOM from "react-dom/client";
import App from "./App";
import Layout from "./components/common/Layout";
import GlobalStyle from "./style/GlobalStyle";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <Layout>
        <GlobalStyle />
        <App />
    </Layout>
);
