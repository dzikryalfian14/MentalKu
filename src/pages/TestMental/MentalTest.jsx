import React from "react";
import * as reactRouterDom from 'react-router-dom';

import Penyebab from "./kecemasanPage/penyebab";
import Dampak from "./kecemasanPage/dampak";
import Hero from "./kecemasanPage/hero";
import Tes from "./kecemasanPage/tes";

const MentalTest = () => {
    return (
    <>
        <Hero />
        <Penyebab />
        <Dampak />
        <Tes />
    </>
    );
};

export default MentalTest;
