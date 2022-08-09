import ApartmentIcon from '@mui/icons-material/Apartment';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge, IconButton } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

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
    return (
        <AppBar position="static">
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
                        <IconButton size="large" color="inherit">
                            <Badge badgeContent={0} color="error">
                                <HomeIcon />
                            </Badge>
                        </IconButton>
                        <IconButton size="large" color="inherit" >
                            <Badge badgeContent={2} color="error">
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
