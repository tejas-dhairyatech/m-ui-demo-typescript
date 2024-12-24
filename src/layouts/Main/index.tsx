import { Outlet } from 'react-router-dom';

// material-ui
import useMediaQuery from '@mui/material/useMediaQuery';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';


// project import
import Drawer from './Drawer';
import Header from './Header';
import navigation from '@/menu-items';
import Breadcrumbs from '@/components/@extended/Breadcrumbs';



export default function MainLayout() {
    return (
        <Box sx={{ display: 'flex', width: '100%' }}>
            <Header />
            <Drawer />
            <Box component="main" sx={{ width: 'calc(100% - 260px)', flexGrow: 1, p: { xs: 2, sm: 3 } }}>
                <Toolbar />
                <Breadcrumbs navigation={navigation} title />
                <Outlet />
            </Box>
        </Box>
    );
}
