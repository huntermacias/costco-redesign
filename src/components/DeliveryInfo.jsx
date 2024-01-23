// components/DeliveryInfo.jsx
import PropTypes from "prop-types";

const DeliveryInfo = ({ deliveryDate, zipCode, onZipChange }) => {
  return (
    <div className=" p-4 rounded-lg shadow-md bg-dark-secondary border">
      <h3 className="text-lg font-semibold mb-2">Delivery</h3>
      <p>
        Earliest <strong>{deliveryDate}</strong> if ordered now.
      </p>
      <div className="mt-2">
        <label htmlFor="zipCode" className="block text-sm font-medium mb-1">
          Delivery ZIP Code:
        </label>
        <input
          type="text"
          id="zipCode"
          value={zipCode}
          onChange={onZipChange}
          className="border border-gray-300 rounded p-2 text-sm w-1/2 text-black"
        />
      </div>
      <p className="text-sm text-gray-400 mt-2">
        Your delivery date is not secured until you complete your order.
      </p>
    </div>
  );
};

DeliveryInfo.propTypes = {
  deliveryDate: PropTypes.string.isRequired,
  zipCode: PropTypes.string.isRequired,
  onZipChange: PropTypes.func.isRequired,
};

export default DeliveryInfo;
