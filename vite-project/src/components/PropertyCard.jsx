const PropertyCard = ({ title, location, price, imageUrl }) => {
    return (
      <div className="bg-white p-4 shadow-md rounded-md">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover mb-4" />
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-2">{location}</p>
        <p className="text-lg font-semibold text-teal-700">${price}</p>
      </div>
    );
  };

export default PropertyCard