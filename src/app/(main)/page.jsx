import Image from "next/image";
import img from "../../assets/summer_sale1.png"
import data from "../../data/data.json"
import Products from "@/component/Products";
import Summer_care from "@/component/Summer_care";
import Top_brand from "@/component/Top_brand";
export default function Home() {
 
  console.log(data.length);
  return (
    <div>
          <Image src={img} alt="image" className="w-full h-[70vh] container mx-auto"></Image>
          <h2 className=" mt-10 text-5xl font-bold text-center">Popular Products</h2>
          <div className="mt-10 container mx-auto grid sm:grid-cols-1 md:grid-cols-3 gap-5">
              {
                data.map(product=>product.section=="Popular"?<Products key={product.id} product={product}></Products>:"")
              }
          </div>
          <Summer_care></Summer_care>
          <Top_brand></Top_brand>
    </div>
  );
}
