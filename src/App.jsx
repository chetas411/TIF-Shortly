import React from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header/Header';
import Showcase from './components/Showcase/Showcase';
import MainSection from './components/MainSection/MainSection';
import EndSection from './components/EndSection/EndSection';
import Footer from './components/Footer/Footer';
import Theme from './components/Theme';

const App = () => {
    return (
        <ThemeProvider theme={Theme}>
            <Header />
            <Showcase />
            <MainSection />
            <EndSection />
            <Footer />
        </ThemeProvider>
    );
};

export default App;
