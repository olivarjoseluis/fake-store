import { useParams } from 'react-router-dom';

const ProductsSinglePage = () => {
  let { productId } = useParams();
  return (
    <div>ProductsSinglePage{productId}</div>
  )
}

export default ProductsSinglePage