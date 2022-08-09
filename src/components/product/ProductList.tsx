import { Container, Grid } from "@mui/material";
import callProductApi from "api/product/api";
import { IProductItem } from "constants/interface";
import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";

const styles = {
    containter: { marginTop: "20px" }
}

const ProductList = () => {
    const [products, setProducts] = useState<null | IProductItem[]>();
    const [errors, setErrors] = useState<any>();
    useEffect(() => {
        const callApi = async () => {
            try {
                const response = await callProductApi.getListProduct();
                setProducts(response.data);
                console.log("data: ", response.data);

            } catch (error) {
                setErrors(error);
            }
        };
        callApi();
    }, []);
    return (
        <Container sx={styles.containter}>
            <Grid container spacing={4}>
                <Grid item xs={3}>
                    <ProductItem />
                </Grid>
                <Grid item xs={3}>
                    <ProductItem />
                </Grid>
                <Grid item xs={3}>
                    <ProductItem />
                </Grid>
                <Grid item xs={3}>
                    <ProductItem />
                </Grid>
                <Grid item xs={3}>
                    <ProductItem />
                </Grid>
            </Grid>
        </Container>
    );
};

export default ProductList;