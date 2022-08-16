import ApartmentIcon from '@mui/icons-material/Apartment';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge, IconButton } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { closeRedirect, openRedirect } from 'app/slices/redirectSlice';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';

const styles = {
    apartmentIcon: { display: { xs: 'none', md: 'flex' }, mr: 1 },
    titleApp: {
        mr: 2,
        display: { xs: 'flex', md: 'flex' },
        flexGrow: 1,
        fontFamily: 'monospace',
        fontWeight: 700,
        color: 'inherit',
        textDecoration: 'none',
    },
    box: { flexGrow: 0 },
}
const Header = () => {
    const dispatch = useAppDispatch()
    const { countCart } = useAppSelector(state => state.carts)
    const handleDispatch = (action: any) => {
        dispatch(action)
    }
    return (
        <AppBar position="fixed">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <ApartmentIcon sx={styles.apartmentIcon} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        sx={styles.titleApp}
                    >
                        STDIO Shop
                    </Typography>
                    <Box sx={styles.box}>
                        <IconButton onClick={() => handleDispatch(closeRedirect())} size="large" color="inherit">
                            <Badge badgeContent={0} color="error">
                                <HomeIcon />
                            </Badge>
                        </IconButton>
                        <IconButton onClick={() => handleDispatch(openRedirect())} size="large" color="inherit" >
                            <Badge badgeContent={countCart} color="error">
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Header;
