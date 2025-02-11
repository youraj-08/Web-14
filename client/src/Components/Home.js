import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import AppTheme from './shared-theme/AppTheme';
import AppAppBar from './ui-components/AppAppBar';
import Hero from './ui-components/Hero';
import LogoCollection from './ui-components/LogoCollection';
import Footer from './ui-components/Footer';

export default function MarketingPage(props) {
    return (
        <AppTheme {...props}>
            <CssBaseline enableColorScheme />
            <AppAppBar />
            <Hero />
            <div>
                <LogoCollection />
                <Divider />
                <Footer />
            </div>
        </AppTheme>
    );
}
