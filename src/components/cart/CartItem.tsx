import CloseIcon from '@mui/icons-material/Close';
import { Button } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";

const styles = {
  img: {
    width: "150px",
    height: "100px",
    borderRadius: "10px",
    margin: "0 5px"
  },
  price: { color: "red", margin: "0 20px", fontWeight: "700" }
}

const CartItem = () => {
  return (
    <ListItem>
      <ListItemAvatar>
        <img style={styles.img} src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
      </ListItemAvatar>
      <ListItemText primary="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops" secondary="men's clothing" />
      <ListItemText sx={styles.price} primary="$109.95" />
      <ListItemText>
        <Button variant="text" color="error">
          <CloseIcon />
        </Button>
      </ListItemText>
    </ListItem>
  );
};

export default CartItem;
