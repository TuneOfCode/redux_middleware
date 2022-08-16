import Header from "containers/header/Header";
import { useAppSelector } from "hooks/useAppSelector";
import Cart from "./Cart";
import Product from "./Product";

const Home = () => {
    const isRedirect = useAppSelector(state => state.redirect.isRedirect)
    return (
        <>
            <Header />
            {isRedirect ? <Cart /> : <Product />}
        </>
    );
};

export default Home;