import Image from "next/image";
import { FaStar } from "react-icons/fa";

const Details_page = ({ product }) => {
  const {
    name,
    brand,
    price,
    rating,
    stock,
    description,
    image,
    category,
  } = product;

  return (
    <div className="max-w-2xl mx-auto p-4 bg-gray-200 shadow-lg my-10 rounded-md">
      
      {/* Image Section */}
      {/* <div className="relative w-full h-[400px]">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover rounded-lg"
        />
      </div> */}
<div >
     <img
      src={image}
      alt="Shoes" className='h-150 w-full'/>
      <div className="mt-6 space-y-2">
        <h1 className="text-2xl font-bold">{name}</h1>
        <p className="text-gray-500">{brand}</p>

        <p>{description}</p>

        <div className="mt-4 space-y-1">
          <p>Available Stock: {stock}</p>
          <p className="text-green-700 font-bold"> {category}</p>
           <div className="card-actions justify-between">
                  <div className="flex items-center gap-1">
                  <FaStar className="text-pink-400" />
                   <p>{rating}</p>
                  </div>
                  <h2 className="text-[20px]">${price}</h2>
              </div>
        </div>
        <div className="flex justify-end">

        <button className="btn btn-outline btn-secondary ">Products</button>
        </div>
      </div>

      

</div>
     
    </div>
  );
};

export default Details_page;