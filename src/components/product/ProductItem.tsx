import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
import { Box, Chip, Rating, Stack } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const styles = {
    card: { maxWidth: 345 },
    center: { display: "flex", justifyContent: "center", alignItem: "center" },
    row: { margin: "5px 0", display: "flex", justifyContent: "center", flexDirection: "row" },
    col: { display: "flex", justifyContent: "center", flexDirection: "column" },
    title: { textAlign: "center" },
    description: { textAlign: "justify", padding: "0 10px" },
    category: { marginTop: "-5px", fontSize: "12px" },
    price: {
        display: "flex", justifyContent: "center",
        fontSize: '1.5rem'
    }
}

const ProductItem = (props: {}) => {
    return (
        <Card sx={styles.card}>
            <CardMedia
                component="img"
                height="320"
                image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                alt="Mens Cotton Jacket"
            />
            <CardContent sx={styles.col}>
                <Typography sx={styles.title} gutterBottom variant="h5" component="div">
                    Mens Cotton Jacket
                </Typography>
                <Typography sx={styles.description} variant="body2" color="text.secondary">
                    Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday
                </Typography>
                <Box>
                    <Stack sx={styles.row}>
                        <Rating name="half-rating" value={3.9} precision={0.1} readOnly />
                        <Chip sx={styles.category} label="men's clothing" color="error" variant="outlined" />
                    </Stack>
                </Box>
                <Typography sx={styles.price} color="error">
                    $109.95
                </Typography>
            </CardContent>
            <CardActions sx={styles.center}>
                <Button sx={{ marginTop: "-10px" }} color="warning" variant="contained" startIcon={<AddShoppingCartSharpIcon />}>
                    Add To Cart
                </Button>
            </CardActions>
        </Card>
    );
};

export default ProductItem;