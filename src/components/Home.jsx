import { Header } from "./Header";
import { CardPizza } from "./CardPizza";
import { pizzas } from "../assets/JS/pizzas";

const Home = () => {
    return (
        <>
        <Header/>
        {pizzas.map((pizza) => (
            <CardPizza
            key={pizza.id}
            name={pizza.name}
            desc={pizza.desc}
            img={pizza.img}
            ingredients={pizza.ingredients}
            price={pizza.price}
            />
        )
    )}
        </>
    
    );
};

export default Home;
