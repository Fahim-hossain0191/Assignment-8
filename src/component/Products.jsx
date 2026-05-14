
import Link from "next/link";
import { FaStar } from "react-icons/fa";
//   {
//     "id": 1,
//     "name": "UV Protection Sunglasses",
//     "brand": "SunShade",
//     "price": 15,
//     "rating": 4.7,
//     "stock": 10,
//     "description": "Stylish UV protection sunglasses perfect for summer outings.",
//     "image": "https://i.postimg.cc/3x3QzSGq/sunglasses.jpg",
//     "category": "Accessories"
//   }

const Products = ({product}) => {
    const {id,name,brand,price,rating,stock,description,image,category,section}=product
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={image}
      alt="Shoes" className='h-100 w-full'/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {name}
      <div className="badge badge-secondary">{section}</div>
    </h2>
   <h2 className='font-semibold text-xl'>{brand}</h2>
    <div className="card-actions justify-between">
        <div className="flex items-center gap-1">
        <FaStar className="text-pink-400" />
         <p>{rating}</p>
        </div>
        <h2 className="text-[20px]">${price}</h2>
    </div>
    <Link href={`/seedetails/${product.id}`} className="flex justify-end">
      <button className="btn btn-outline btn-secondary" >See details</button>
    
    </Link>
  </div>
</div>
    );
};

export default Products;