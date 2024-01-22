import PropTypes from "prop-types";
import ReadMore from "./ReadMore";

const Product = ({ name, description, img, price, isMemberExclusive }) => {
  return (
    <div className="group bg-dark-secondary rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform transition duration-500 hover:scale-105">
      <img
        src={img}
        alt={name}
        className="w-full h-56 object-cover group-hover:opacity-75 transition duration-500"
      />
      <div className="p-4">
        <h2 className="text-xl text-white font-semibold mb-2">{name}</h2>
        <ReadMore>{description}</ReadMore>
        {/* Members Only Section */}
        {isMemberExclusive && (
          <div className="flex items-center mt-4">
            <img
              src="/public/icons/c.png"
              alt="Member Only"
              className="w-6 h-6 mr-2"
            />
            <span className="text-sm text-gray-400">Member Only Item</span>
          </div>
        )}

        {/* Product details */}
        <div className="flex justify-between items-center">
          <span className="text-lg text-blue-400">${price}</span>
          <button className="bg-blue-600 text-white text-sm uppercase font-bold py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
Product.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  isMemberExclusive: PropTypes.bool.isRequired,
};

export default Product;
