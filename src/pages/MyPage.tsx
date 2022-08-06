import React from "react";
import { Helmet } from "react-helmet";
import MyPageContainer from "../components/my/MyPageContainer";

const MyPage = () => {
    return (
        <>
            <Helmet>
                <title>포켓챠 - 내정보</title>
            </Helmet>
            <MyPageContainer />
        </>
    );
};

export default MyPage;
