// components/ProductGrid.jsx
import Product from './Product';
import products from '../product_data/data';

const ProductGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {products.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          name={product.name}
          description={product.description}
          img={product.image}
          category={product.category}
          price={product.price}
          isMemberExclusive={product.isMemberExclusive}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
