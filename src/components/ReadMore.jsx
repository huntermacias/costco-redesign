import { useState } from 'react';
import PropTypes from 'prop-types'; 

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <p className="text-gray-400 text-opacity-90 mb-4">
      {isReadMore ? text.slice(0, 100) : text}
      <span
        onClick={toggleReadMore}
        className="text-blue-400 cursor-pointer ml-2"
      >
        {isReadMore ? "...Read More" : " Show Less"}
      </span>
    </p>
  );
};

ReadMore.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ReadMore;
