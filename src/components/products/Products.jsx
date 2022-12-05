import { useEffect, useReducer, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import "./../../styles/_grid.scss";
import "./../../styles/_card.scss";
import "./_products.scss";
import productImage from "./../../assets/products/default-product.jpg";
import { Link } from "react-router-dom";

const initialState = {
  favorites: []
}

const favoriteProductsReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITE':
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };

    default:
      return state;
  }
}

const Products = () => {
  const [favorites, dispatch] = useReducer(favoriteProductsReducer, initialState);
  const [products, setProducts] = useState([]);
  const generateNumber = () => {
    return Math.floor(Math.random() * 100) + 1;
  }

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=12")
      .then(response => response.json())
      .then(data => setProducts(data))
  }, []);

  const handleClickFavorite = favorite => {
    dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite })
  }
  //console.log(products)
  return (
    <section className="products">
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="product c4">
            <div key={product.id} className="card product-card">
              <button type="button" className="add-favorite-product"><FontAwesomeIcon icon={faStar} /></button>
              <Link key={product.id} to={`${window.location.pathname}/${product.id}`}>
                <img className="img-card" src={product.images[0] ? product.images[0] : productImage} alt={product.title} />
                <div className="body-product-card card-body">
                  <p className="price-product">$ {(product.price * 1000).toLocaleString()} <span className="percentage-price">-{generateNumber()}%</span></p>
                  <p className="title-product">{product.title}</p>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Products