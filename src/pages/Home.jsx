import React, { useEffect, useState } from 'react';
import { BoxFixedWidth } from '../components/UIElements';
import { useStore } from '../appStore';
const { setState } = useStore.getState()

const Home = () => {
    const [ texts, imgLoaded ] = useStore(s => [s.texts, s.imgLoaded])
    const { headers } = texts
    const [winWidth, setWinWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setWinWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const wFactor = winWidth >= 1000 ? 1 : winWidth / 1000
    return (
        <BoxFixedWidth>
            <h1>{headers.title}</h1>
            {/* <AshramSection wFactor={wFactor} onLoad={() => setState({imgLoaded: true}) }/>
            <SSADivider />
            <h1>{headers.satsang}</h1>
            <SatsangSection loadIframe={imgLoaded}/>
            <SSADivider />
            <h1>{headers.followUs}</h1>
            <FollowUsSection />
            <SSADivider /> */}
        </BoxFixedWidth>
    );
};

export default Home;