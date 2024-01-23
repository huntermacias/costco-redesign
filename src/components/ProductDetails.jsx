import { useParams } from 'react-router-dom';
import products from '../product_data/data';
import DeliveryInfo from './DeliveryInfo';
import { useState } from 'react';
import ReadMore from './ReadMore';

const ProductDetails = () => {
  let { id } = useParams();
  let product = products.find(p => p.id.toString() === id);
  const [zipCode, setZipCode] = useState("98101");

  if (!product) {
    return <div className="container mx-auto my-8 text-center text-xl text-white">Product not found</div>;
  }

  let productImage = product.image;
  const deliveryDate = "Friday, January 26";
  const handleZipChange = (event) => setZipCode(event.target.value);

  return (
    <div className="container mx-auto my-8 p-4 text-white">
          <h2 className="text-4xl font-bold mb-4">{product.name}</h2>
      <div className="lg:flex lg:items-center lg:space-x-6">
        <div className="lg:w-1/2 mb-4 lg:mb-0">
          <img
            src={productImage}
            alt={product.name}
            className="w-full max-h-96 object-cover object-center rounded-lg shadow-lg shadow-gray-400"
          />
        </div>
        <div className="lg:w-1/2 space-y-4">
          
          <div className="text-gray-300">
            <ReadMore>{product.description}</ReadMore>
          </div>
          <p className="text-2xl font-bold">Price: ${product.price}</p>
          <button className="bg-red-600 hover:bg-red-700 text-white text-lg font-semibold py-1 px-4 rounded-lg transition duration-300">
            Add to Cart
          </button>
        </div>
      <div className="mt-6 bg-gray-800 p-4 rounded-lg shadow-md">
        <DeliveryInfo 
          deliveryDate={deliveryDate} 
          zipCode={zipCode} 
          onZipChange={handleZipChange} 
        />
        {product.isMemberExclusive && (
            <div className='flex justify-center mt-2'>
             <img
              src="/icons/c.png"
              alt="Member Only"
              className="w-7 h-7 mr-0.5"
            />
            <span className="bg-red-600 text-white px-3 py-1 text-sm italic rounded font-semibold">
              Member Exclusive
            </span>

            </div>
          )}
      </div>
      </div>
    </div>
  );
};

export default ProductDetails;
