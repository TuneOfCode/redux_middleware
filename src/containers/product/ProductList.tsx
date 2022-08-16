import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Chip, CircularProgress, Container, Grid, Rating, Stack, Typography } from "@mui/material";
import { addToCart, totalMoney } from 'app/slices/cartSlice';
import { fetchProducts } from 'app/slices/productSlice';
import { ICartItem } from 'constants/interfaces';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';
import { useEffect } from "react";

const styles = {
    containter: { marginTop: "20px", marginBottom: "30px" },
    card: { maxWidth: 345, height: 555 },
    grid: { display: "flex", justifyContent: "center", alignItem: "center", marginTop: '100px' },
    center: { display: "flex", justifyContent: "center", alignItem: "center" },
    row: { margin: "5px 0", display: "flex", justifyContent: "center", flexDirection: "row" },
    col: { display: "flex", justifyContent: "center", flexDirection: "column" },
    title: { textAlign: "center", textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" },
    description: { textAlign: "justify", padding: "0 10px" },
    category: { marginTop: "-5px", fontSize: "12px" },
    price: {
        display: "flex", justifyContent: "center",
        fontSize: '1.5rem'
    },
    img: { objectFit: "contain" }
}

const ProductList = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])
    const { products, isLoading } = useAppSelector(state => state.products)
    const handleAddCart = (cart: ICartItem) => {
        dispatch(addToCart(cart))
        dispatch(totalMoney())
    }
    return (
        <Container sx={styles.containter}>
            <Grid sx={isLoading ? { display: "flex", justifyContent: "center", marginTop: "20%" } : {}} container spacing={4}>
                {products?.length === 0 && !isLoading && <h3>List product is empty </h3>}
                {
                    isLoading
                        ? <CircularProgress color='primary' />
                        : (products?.map(product =>
                            <Grid key={product.id} item xs={3}>
                                <Card sx={styles.card}>
                                    <CardMedia
                                        component="img"
                                        sx={styles.img}
                                        height="320"
                                        image={product.image}
                                        alt={product.title}
                                    />
                                    <CardContent sx={styles.col}>
                                        <Typography sx={styles.title} gutterBottom variant="h5" component="div">
                                            {product.title}
                                        </Typography>
                                        <Typography sx={styles.description} variant="body2" color="text.secondary">
                                            {product.descriptiton}
                                        </Typography>
                                        <Box>
                                            <Stack sx={styles.row}>
                                                <Rating name="half-rating" value={product.rating.rate} precision={0.1} readOnly />
                                                <Chip sx={styles.category} label={product.category} color="error" variant="outlined" />
                                            </Stack>
                                        </Box>
                                        <Typography sx={styles.price} color="error">
                                            ${product.price}
                                        </Typography>
                                    </CardContent>
                                    <CardActions sx={styles.center}>
                                        <Button
                                            sx={{ marginTop: "-10px" }}
                                            color="warning" variant="contained"
                                            startIcon={<AddShoppingCartSharpIcon />}
                                            onClick={() => handleAddCart(product)}
                                        >
                                            Add To Cart
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}

            </Grid>
        </Container>
    );
};

export default ProductList;