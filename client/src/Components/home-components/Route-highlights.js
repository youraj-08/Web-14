import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import AppTheme from '../shared-theme/AppTheme';
import AppAppBar from '../ui-components/AppAppBar';
import Highlights from '../ui-components/Highlights';
import Footer from '../ui-components/Footer';

export default function Features_Route(props) {
    return (
        <AppTheme {...props}>
            <CssBaseline enableColorScheme />
            <AppAppBar />
            <div>
                <Divider />
                <Highlights />
                <Divider />
                <Footer />
            </div>
        </AppTheme>
    );
}
