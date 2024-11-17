import PropTypes from "prop-types";

const CardPizza = ({ name, desc, img, ingredients, price }) => {
  return (
    <div className="card m-3" style={{width:"18rem"}}>
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <p className="card-text">{desc}</p>
      <ul className="list-group list-group-flush">
      🍕{ingredients.map((ingredient, index) => (
          <li key={index} className="list-group-item">{ingredient}</li>
        ))}
      </ul>
      <p className="mt-3 fw-bold">Precio: ${price}</p>
      <a href="#" className="btn btn-light">Ver más 👀</a>
      <a href="#" className="btn btn-dark">Añadir 🛒</a>
      </div>
    </div>
  );
};

// Validaciones de PropTypes
CardPizza.propTypes = {
  name: PropTypes.string.isRequired, 
  desc: PropTypes.string.isRequired, 
  img: PropTypes.string.isRequired, 
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired, 
  price: PropTypes.number.isRequired, 
};

export default CardPizza;


