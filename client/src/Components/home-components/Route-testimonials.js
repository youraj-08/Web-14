import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import AppTheme from '../shared-theme/AppTheme';
import AppAppBar from '../ui-components/AppAppBar';
import Testimonials from '../ui-components/Testimonials';
import Footer from '../ui-components/Footer';

export default function Features_Route(props) {
    return (
        <AppTheme {...props}>
            <CssBaseline enableColorScheme />
            <AppAppBar />
            <div>
                <Divider />
                <Testimonials />
                <Divider />
                <Footer />
            </div>
        </AppTheme>
    );
}
