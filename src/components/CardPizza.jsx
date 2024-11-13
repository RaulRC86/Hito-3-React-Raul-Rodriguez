import PropTypes from 'prop-types'; 

export const PizzaCard = ({ imgSrc, title, ingredients, price }) => {
  return (
    <div className="col">
      <div className="card" style={{ width: '18rem' }}>
        <img src={imgSrc} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Ingredientes:</li>
          <li className="list-group-item">🍕 {ingredients.join(', ')}</li>
          <li className="list-group-item">Precio: ${price}</li>
        </ul>
        <div className="card-body">
          <a href="#" className="card-link boton1">Ver más 👀</a>
          <a href="#" className="card-link boton2">Añadir 🛒</a>
        </div>
      </div>
    </div>
  );
};

PizzaCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  price: PropTypes.number.isRequired,
};

export const PizzaCards = () => {
  const pizzas = [
    {
      title: 'Pizza Napolitana',
      imgSrc: 'https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c',
      ingredients: ['Mozarella', 'tomates', 'jamón', 'orégano'],
      price: 5950,
    },
    {
      title: 'Pizza Española',
      imgSrc: 'https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab',
      ingredients: ['Mozarella', 'gorgonzola', 'parmesano', 'provolone'],
      price: 6950,
    },
    {
      title: 'Pizza Pepperoni',
      imgSrc: 'https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3',
      ingredients: ['Mozarella', 'pepperoni', 'orégano'],
      price: 6950,
    },
  ];

  return (
    <main>
      <div className="container">
        <div className="row">
          {pizzas.map((pizza, index) => (
            <PizzaCard key={index} {...pizza} />
          ))}
        </div>
      </div>
    </main>
  );
};
