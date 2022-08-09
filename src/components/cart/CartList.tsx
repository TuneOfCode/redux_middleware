import { Button, List, Typography } from "@mui/material";
import { Box } from "@mui/system";
import CartItem from "./CartItem";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

const styles = {
    box: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: "center",
        alignItem: "center",
        margin: "20px 0"
    },
    boxBtn: {
        display: 'flex',
        flexDirection: "column",
        justifyContent: "center",
        alignItem: "center",
        borderTop: "1px solid #ddd"
    },
    list: {
        width: '100%',
        maxWidth: 500,
        bgcolor: 'background.paper',
        overflowX: "hidden",
        overflowY: "auto",
    },
    total: {
        textAlign: "center",
        fontSize: '25px'
    }
};

const CartList = () => {
    return (
        <Box sx={styles.box}>
            <List sx={styles.list}>
                <CartItem />
                <CartItem />
                <Box sx={styles.boxBtn}>
                    <Typography sx={styles.total}>Total: <span style={{ fontWeight: "bold" }}>$200.0</span></Typography>
                    <Button color="success" variant="contained" startIcon={<ShoppingCartCheckoutIcon />}>
                        Checkout
                    </Button>
                </Box>
            </List>
        </Box>
    );
};

export default CartList;