import { Helmet } from "react-helmet";
import HomeContainer from "../components/home/HomeContainer";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>포켓챠 - 홈</title>
            </Helmet>
            <HomeContainer />
        </>
    );
};

export default Home;
