import React from 'react';
import Header from './components/Header/Header';
import Showcase from './components/Showcase/Showcase';
import LinkSection from './components/LinkSection/LinkSection';
import EndSection from './components/EndSection/EndSection';
import Footer from './components/Footer/Footer';

const App = () => {
    return (
        <div>
            <Header />
            <Showcase />
            <LinkSection />
            <EndSection />
            <Footer />
        </div>
    );
};

export default App;
