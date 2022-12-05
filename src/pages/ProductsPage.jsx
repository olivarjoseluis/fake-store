import Products from "../components/products/Products"

const ProductsPage = () => {
  return (
    <div className="products-page">
      <div className="container">
        <div className="row">
          <div className="c3">
            Filters
          </div>
          <div className="c9">
            <Products />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsPage