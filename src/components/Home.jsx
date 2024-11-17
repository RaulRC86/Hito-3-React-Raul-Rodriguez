import { Header } from "./Header";
import CardPizza from "./CardPizza";
import { pizzas } from "../assets/JS/pizzas";

const Home = () => {
    console.log(pizzas);

    return (
        <>
        <Header/>
        <div className="container mt-5">
            <div className="row">
        {pizzas.map((pizza) => (
            <div className="col-md-4" key={pizza.id}>
            <CardPizza
            key={pizza.id}
            name={pizza.name}
            desc={pizza.desc}
            img={pizza.img}
            ingredients={pizza.ingredients}
            price={pizza.price}
            />   
            </div>
        )
    )}
    </div>
    </div>
        </>
    
    );
};

export default Home;
