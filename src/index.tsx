import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import App from "./App";
import GlobalStyle from "./style/GlobalStyle";
import { BrowserRouter } from "react-router-dom";
import ScrollInit from "./components/common/ScrollInit";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 0,
            refetchOnWindowFocus: false,
        },
    },
});

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <QueryClientProvider client={queryClient}>
        <RecoilRoot>
            <BrowserRouter>
                <ReactQueryDevtools initialIsOpen={false} />
                <GlobalStyle />
                <App />
                <ScrollInit />
            </BrowserRouter>
        </RecoilRoot>
    </QueryClientProvider>
);
