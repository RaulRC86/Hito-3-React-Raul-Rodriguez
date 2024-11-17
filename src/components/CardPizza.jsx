import PropTypes from "prop-types";

const CardPizza = ({ name, desc, img, ingredients, price }) => {
  return (
    <div className="cardPizza">
      <img src={img} alt={name} />
      <h2>{name}</h2>
      <p>{desc}</p>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <p>Precio: ${price}</p>
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


