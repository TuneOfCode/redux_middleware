import { Badge, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const ButtonCart = (props: any) => {
    return (
        <IconButton size="large" color="inherit">
            <Badge badgeContent={2} color="error">
                <ShoppingCartIcon />
            </Badge>
        </IconButton>
    );
};

export default ButtonCart;