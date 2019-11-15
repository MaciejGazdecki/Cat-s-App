import React from 'react';
import BaseSection from "../BaseSection/baseSection";
import VideoSection from "../../Main Components/VideoSection/videoSection";
import DomesticCatHistory from "../../Main Components/DomesticCatHistory/domesticCatHistory";

function homePage() {
    return (
        <>
            <BaseSection/>
            <VideoSection/>
            <DomesticCatHistory/>
        </>
    )
}

export default homePage;