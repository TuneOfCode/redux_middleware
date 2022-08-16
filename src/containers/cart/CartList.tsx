import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Alert, Button, List, ListItem, ListItemAvatar, ListItemText, Snackbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { checkoutToCart, removeToCart, totalMoney } from 'app/slices/cartSlice';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from "hooks/useAppSelector";
import { useState } from 'react';

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
    },
    img: {
        width: "150px",
        height: "100px",
        borderRadius: "10px",
        margin: "0 5px"
    },
    title: { overflow: "hidden", whiteSpace: "norwrap" },
    price: { color: "red", margin: "0 20px", fontWeight: "700" },
    quantity: { color: "green", margin: "0 30px", fontWeight: "700" },
    btn: { marginLeft: '-25px', width: '40px' }
};

const CartList = () => {
    const { total, quantity } = useAppSelector(state => state.carts)
    const { products } = useAppSelector(state => state.products)
    const dispatch = useAppDispatch()
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };
    const handleCheckout = () => {
        dispatch(checkoutToCart())
        setOpen(true);
    }
    return (
        <Box sx={styles.box}>
            {open && <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    Checkout successful !
                </Alert>
            </Snackbar>}
            <List sx={styles.list}>
                {JSON.stringify(quantity) === "{}" && <h3>Cart is empty</h3>}
                {Object.keys(quantity).map((key: any) => {
                    return (
                        <ListItem key={products[+key - 1].id}>
                            <ListItemAvatar>
                                <img style={styles.img} src={products[+key - 1].image} />
                            </ListItemAvatar>
                            <ListItemText sx={styles.title} primary={products[+key - 1].title} secondary={products[+key - 1].category} />
                            <ListItemText sx={styles.price} primary={`$${products[+key - 1].price}`} />
                            <ListItemText sx={styles.quantity} primary={quantity[key]} />
                            <ListItemText>
                                <Button sx={styles.btn} variant="text" color="error" onClick={() => {
                                    dispatch(removeToCart(products[+key - 1]))
                                    dispatch(totalMoney())
                                }}>
                                    <CloseIcon />
                                </Button>
                            </ListItemText>
                        </ListItem>
                    )
                })}
                {JSON.stringify(quantity) !== "{}" && <Box sx={styles.boxBtn}>
                    <Typography sx={styles.total}>Total: <span style={{ fontWeight: "bold" }}>${total.toFixed(3)}</span></Typography>
                    <Button onClick={() => handleCheckout()} color="success" variant="contained" startIcon={<ShoppingCartCheckoutIcon />}>
                        Checkout
                    </Button>
                </Box>}
            </List>
        </Box>
    );
};

export default CartList;