import Header from "components/header/Header";
import Cart from "./Cart";
import Product from "./Product";

const Home = () => {
    return (
        <>
            <Header />
            {false ? <Cart /> : <Product />}
        </>
    );
};

export default Home;