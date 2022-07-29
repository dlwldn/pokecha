import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ReactDOM from "react-dom/client";
import App from "./App";
import Layout from "./components/common/Layout";
import GlobalStyle from "./style/GlobalStyle";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        }
    },
});

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <QueryClientProvider client={queryClient}>
        <Layout>
            <GlobalStyle />
            <App />
        </Layout>
    </QueryClientProvider>
);
