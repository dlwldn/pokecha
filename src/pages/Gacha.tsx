import React from "react";
import { Helmet } from "react-helmet";
import GachaContainer from "../components/gacha/GachaContainer";

const Gacha = () => {
    return (
        <>
            <Helmet>
                <title>포켓챠 - 뽑기</title>
            </Helmet>
            <GachaContainer />
        </>
    );
};

export default Gacha;
